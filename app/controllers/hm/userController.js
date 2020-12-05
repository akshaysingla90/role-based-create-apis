"use strict";
const HELPERS = require("../../helpers");
const { MESSAGES, ERROR_TYPES, NORMAL_PROJECTION, OPERATION_TYPES } = require('../../utils/constants');
const SERVICES = require('../../services');
const { compareHash, encryptJwt, hashPassword, decryptJwt } = require(`../../utils/utils`);

/**************************************************
 **************** User Controller ****************
 **************************************************/
const userController = {};

/**
 * Function to register a user/resource of the application
 * @param {*} payload 
 */
userController.registerNewUser = async (payload) => {
  const user = await SERVICES.userService.getUser({ email: payload.email }, { _id: 1, email: 1 }, { lean: true });
  if (!!user) throw HELPERS.responseHelper.createErrorResponse(MESSAGES.EMAIL_ALREADY_EXISTS, ERROR_TYPES.BAD_REQUEST);
  payload.password = hashPassword(payload.password);
  await SERVICES.userService.createUser(payload);
  return Object.assign(HELPERS.responseHelper.createSuccessResponse(MESSAGES.USER_REGISTERED_SUCCESSFULLY));
};

/**
 * Function to login a user into the system
 * @param {*} payload
 */
userController.loginUser = async (payload) => {
  // check is user exists in the database with provided email or not.
  const user = await SERVICES.userService.getUser({ email: payload.email }, NORMAL_PROJECTION, { lean: true });
  if (user) {
    // compare user's password.
    if (compareHash(payload.password, user.password)) {
      const dataForJwt = { id: user._id, date: Date.now() };
      const token = encryptJwt(dataForJwt);
      return Object.assign(HELPERS.responseHelper.createSuccessResponse(MESSAGES.LOGGED_IN_SUCCESSFULLY), { token });
    }
    throw HELPERS.responseHelper.createErrorResponse(MESSAGES.INVALID_PASSWORD, ERROR_TYPES.BAD_REQUEST);
  }
  throw HELPERS.responseHelper.createErrorResponse(MESSAGES.INVALID_EMAIL, ERROR_TYPES.BAD_REQUEST);
};

/* export userController */
module.exports = userController;