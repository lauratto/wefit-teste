export const statusCodes = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_SERVER_ERROR: 500,
  };
  
export const errorMessages = {
    BAD_REQUEST: 'Bad Request',
    UNAUTHORIZED: 'Unauthorized',
    FORBIDDEN: 'Forbidden',
    NOT_FOUND: 'Not Found',
    CONFLICT: 'Conflict',
    UNPROCESSABLE_ENTITY: 'Unprocessable Entity',
    INTERNAL_SERVER_ERROR: 'Internal Server Error',
  };

  export const errorMessagesFriendly = {
    PARTNER_CREATED: 'Partner Created successfully',
    PARTNER_ALREADY_EXISTS: 'Partner already exists',
    ERROR_INSERTING_PARTNER: 'Error inserting Partner',
    INVALID_EMAIL_FIELD: 'Invalid EMAIL field',
    INVALID_CPF_FIELD: 'Invalid CPF field',
    INVALID_CNPJ_FIELD: 'Invalid CNPJ field',
    CNPJ_EMPTY: 'The CNPJ is empty',
    INCORRECT_CONFIRM_EMAIL: 'Incorrect confirmation email',
    ERROR_CHECK_TERMS: 'Please check if you agree with the terms of use',
    BAD_REQUEST: 'Expected header not provided.'
  };