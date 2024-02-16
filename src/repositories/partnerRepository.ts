import { Partner } from '../models/partner';
import { Message } from '../models/message';
import { statusCodes, errorMessagesFriendly } from '../constants';

const knex = require('knex');
const config = require('../database');
const db = knex(config);

const msg: Message = {
  message: '',
  status: 0
}

export default class PartnerRepository {

  async createPartner(partner: Partner): Promise<Message> {
    try {
      await checkAndCreatePartner(partner);
      return msg;
    }
    catch (error) {
      msg.message = errorMessagesFriendly.ERROR_INSERTING_PARTNER;
      msg.status = statusCodes.INTERNAL_SERVER_ERROR;
      return msg;
    }
  }
}

const checkAndCreatePartner = async (partner: Partner) => {
  const {cnpj, cpf, email } = partner;

  const fieldsExists = await db('partner')
    .where('cnpj', cnpj)
    .orWhere('cpf', cpf)
    .orWhere('email', email)
    .first()

  if (fieldsExists) {
    msg.message = errorMessagesFriendly.PARTNER_ALREADY_EXISTS;
    msg.status = statusCodes.CONFLICT;
    return;
  }

  const { emailConfirm, ...partnerWithoutEmailConfirm } = partner;
  await db('partner').insert(partnerWithoutEmailConfirm);

  msg.message = errorMessagesFriendly.PARTNER_CREATED;
  msg.status = statusCodes.CREATED;
}