import { Request, Response } from 'express';
import dotenv from 'dotenv';
import PartnerRepository from '../repositories/partnerRepository';
import { Partner, partnerSchema } from '../models/partner';
import { isValidCNPJ, isValidCPF } from '../utils';
import { statusCodes, errorMessages, errorMessagesFriendly } from '../constants';

dotenv.config();

const partnerRepository = new PartnerRepository();
const subscriptionKey = process.env.SUBSCRIPTION_KEY;

const checkPartnerSchema = (object: Partner): boolean => {
  const { error } = partnerSchema.validate(object);
  return !!error?.details?.length;
};

export const createPartner = async (req: Request, res: Response) => {
  try {
    const headerRequestSubscriptionKey = req.headers['ocp-apim-subscription-key'];
    if(headerRequestSubscriptionKey === undefined || headerRequestSubscriptionKey !== subscriptionKey) {
      return res.status(statusCodes.BAD_REQUEST).json({ message: errorMessages.BAD_REQUEST });
    }  

    const partnerData: Partner = req.body;
    const {isCnpj, cnpj, cpf, email, emailConfirm, terms} = partnerData;

    if(checkPartnerSchema(partnerData)) {
      const { error } = partnerSchema.validate(partnerData);
      return res.status(statusCodes.BAD_REQUEST).json({ message: error?.details });
    }

    if(!terms) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: errorMessagesFriendly.ERROR_CHECK_TERMS });
    }

    if(email !== emailConfirm) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: errorMessagesFriendly.INCORRECT_CONFIRM_EMAIL });
    }

    if(isCnpj && !cnpj) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: errorMessagesFriendly.CNPJ_EMPTY});
    }

    if(!isCnpj && cnpj) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: errorMessagesFriendly.INVALID_CNPJ_FIELD});
    }

    if(!isValidCPF(cpf)) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: errorMessagesFriendly.INVALID_CPF_FIELD});
    }

    if(!isValidCNPJ(cnpj) && cnpj && isCnpj) {
      return res.status(statusCodes.UNPROCESSABLE_ENTITY).json({ message: errorMessagesFriendly.INVALID_EMAIL_FIELD});
    }

    const message = await partnerRepository.createPartner(partnerData);
    return res.status(message.status).json({ message: message.message });

  } catch (error) {
    res.status(statusCodes.INTERNAL_SERVER_ERROR).json({ error: errorMessages.INTERNAL_SERVER_ERROR});
  }
};


