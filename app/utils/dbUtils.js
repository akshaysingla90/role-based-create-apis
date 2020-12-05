const { USER_ROLE } = require('../utils/constants');
const { hashPassword } = require('../utils/utils');
const MODELS = require('../models/index');
const MONGOOSE = require('mongoose');
let dbUtils = {};

/**
 * function to check valid reference from models.
 */
dbUtils.checkValidReference = async (document, referenceMapping) => {
  for (let key in referenceMapping) {
    let model = referenceMapping[key];
    if (!!document[key] && !(await model.findById(document[key]))) {
      throw CONSTANTS.RESPONSE.ERROR.BAD_REQUEST(key + ' is invalid.');
    }
  }
};

/**
 * create pagination condition for aggregateQuery with sort.
 *
 * @param {JSON} sort valid mongodb sort condition Object.
 * @param {Number} skip no. of documents to skip.
 * @param {Number} limit no. of documents to return.
 * @returns {Promise<[JSON]>} aggregate pipeline queries for pagination.
 */

dbUtils.paginateWithTotalCount = (sort, skip, limit) => {
  let condition = [
    ...(!!sort ? [{ $sort: sort }] : []),
    { $group: { _id: null, items: { $push: '$$ROOT' }, totalCount: { $sum: 1 } } },
    { $addFields: { items: { $slice: ['$items', skip, limit] } } },
  ]
  return condition;
}

/**
 * Funcion for  database-seeding .
 */
dbUtils.migrateDatabase = async () => {
  let dbVersion = await MODELS.versionModel.findOne();
  let version = dbVersion ? dbVersion.dbVersion : 0;
  let updatedVersion = version;
  if (version < 1) {
    //For testing purpose only I am adding admin credentials from code 
    await new MODELS.userModel({
      email: process.env.TESTING_ADMIN,
      password: hashPassword(process.env.TESTING_ADMIN_PASSWORD),
      role: USER_ROLE.ADMIN
    }).save();
    updatedVersion = 1;
  }
  if (updatedVersion !== version) {
    await MODELS.versionModel.findOneAndUpdate({}, { dbVersion: updatedVersion }, { upsert: true });
  }
  return;
};

module.exports = dbUtils;