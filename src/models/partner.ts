import Joi from 'joi'

export interface Partner {
  isCnpj: boolean;
  cnpj: string;
  cpf: string;
  fullName: string;
  phoneNumber: string;
  cellNumber: string;
  email: string;
  emailConfirm: string;
  street: string;
  number: string;
  complement: string;
  city: string;
  district: string;
  state: string;
  zipCode: string;
  terms: boolean;
}

export const partnerSchema: Joi.ObjectSchema<Partner> = Joi.object({
  isCnpj: Joi.boolean().required(),
  cnpj: Joi.string().allow(''),
  cpf: Joi.string().required(),
  fullName: Joi.string().required(),
  phoneNumber: Joi.string().allow(''),
  cellNumber: Joi.string().required(),
  email: Joi.string().required(),
  emailConfirm: Joi.string().required(),
  street: Joi.string().required(),
  number: Joi.string().required(),
  complement: Joi.string().allow(''),
  city: Joi.string().required(),
  district: Joi.string().required(),
  state: Joi.string().required(),
  zipCode: Joi.string().required(),
  terms: Joi.boolean().required(),
});