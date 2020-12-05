"use strict";
/************* Modules ***********/
const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;
const { USER_ROLE, USER_GENDER } = require('../../utils/constants')
/**************************************************
 ************* User Model or collection ***********
 **************************************************/
const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    age: { type: Number },
    dob: { type: Date },
    gender: { type: Number, enum: [USER_GENDER.FEMALE, USER_GENDER.MALE, USER_GENDER.OTHER] },
    role: { type: String, enum: [USER_ROLE.ADMIN, USER_ROLE.SITE, USER_ROLE.AGENT, USER_ROLE.CASHIER], required: true },
    isDeleted: { type: Boolean, default: false },
});

userSchema.set('timestamps', true);
module.exports = MONGOOSE.model('user', userSchema);



