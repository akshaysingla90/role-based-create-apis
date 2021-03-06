'use strict';

let CONSTANTS = {};

CONSTANTS.SERVER = {
  ONE: 1
};

CONSTANTS.USER_ROLE = {
  ADMIN: 'Admin',
  AGENT: 'Agent',
  SITE: 'Site',
  CASHIER: 'Cashier'
};

CONSTANTS.USER_GENDER = {
  MALE: 'Male',
  FEMALE: 'Female',
  OTHER: 'Other',
};


CONSTANTS.NORMAL_PROJECTION = { __v: 0, isDeleted: 0, createdAt: 0, updatedAt: 0 };

CONSTANTS.MESSAGES = require('./messages');

CONSTANTS.SECURITY = {
  JWT_SIGN_KEY: 'fasdkfjklandfkdsfjladsfodfafjalfadsfkads',
  BCRYPT_SALT: 8
};

CONSTANTS.ERROR_TYPES = {
  DATA_NOT_FOUND: 'DATA_NOT_FOUND',
  BAD_REQUEST: 'BAD_REQUEST',
  MONGO_EXCEPTION: 'MONGO_EXCEPTION',
  ALREADY_EXISTS: 'ALREADY_EXISTS',
  FORBIDDEN: 'FORBIDDEN',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  UNAUTHORIZED: 'UNAUTHORIZED',
  SOCKET_ERROR: 'SOCKET_ERROR',
  INVALID_MOVE: 'invalidMove'
};


CONSTANTS.OPERATION_TYPES = {
  CREATE: 1,
  UPDATE: 2,
  DELETE: 3
};

CONSTANTS.AVAILABLE_EXTENSIONS_FOR_FILE_UPLOADS = ['csv', 'png'];

CONSTANTS.PAGINATION = {
  DEFAULT_LIMIT: 10,
  DEFAULT_NUMBER_OF_DOCUMENTS_TO_SKIP: 0
};


module.exports = CONSTANTS;
