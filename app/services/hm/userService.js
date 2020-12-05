'use strict';
const { userModel } = require(`../../models`);
let userService = {};

/**
 * Function to create user
 * @param {*} user 
 */
userService.createUser = async (user) => {
  return await new userModel(user).save();
};

/**
 * Function to fetch user from the system based on criteria.
 * @param {*} criteria 
 * @param {*} projection 
 * @param {*} options 
 */
userService.getUser = async (criteria, projection, options = { lean: true }) => {
  return await userModel.findOne(criteria, projection).lean();
};

/**
 * Function to update user
 * @param {*} criteria 
 * @param {*} dataToUpdate 
 * @param {*} options 
 */
userService.updateUser = async (criteria = {}, dataToUpdate = {}, options = {}) => {
  return await userModel.findOneAndUpdate(criteria, dataToUpdate, { ...options, useFindAndModify: true }).lean();
};

module.exports = userService;