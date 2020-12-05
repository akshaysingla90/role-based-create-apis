'use strict';

const { Joi } = require('../../../utils/joiUtils');
const { USER_ROLE,USER_GENDER } = require(`../../../utils/constants`);
//load controllers
const { userController } = require(`../../../controllers`);

const routes = [
	{
		method: 'POST',
		path: '/v1/user/site',
		joiSchemaForSwagger: {
			body: {
				email: Joi.string().email().required().description('Resource\'s email.'),
				password: Joi.string().required().description('Resource\'s password.'),
				role: Joi.string().default(USER_ROLE.SITE).valid(USER_ROLE.SITE).optional().description('Resource\'s role. should be site'),
			},
			group: 'User',
			description: 'Route to register a site.',
			model: 'Register_Site'
		},
		auth: [USER_ROLE.AGENT],
		handler: userController.registerNewUser
	},
	{
		method: 'POST',
		path: '/v1/user/agent',
		joiSchemaForSwagger: {
			body: {
				email: Joi.string().email().required().description('Resource\'s email.'),
				password: Joi.string().required().description('Resource\'s password.'),
				role: Joi.string().valid(USER_ROLE.AGENT).default(USER_ROLE.AGENT).description('Resource\'s role. should be agent'),
				firstName: Joi.string().optional().description('User\'s first name.'),
				lastName: Joi.string().optional().description('User\'s last name.'),
				age: Joi.number().min(0).optional().description('User\'s age.'),
				dob: Joi.date().optional().description('User\'s  DOB .'),
				gender: Joi.string().valid(USER_GENDER.FEMALE, USER_GENDER.MALE, USER_GENDER.OTHER).optional().description('User\'s gender.')
			},
			group: 'User',
			description: 'Route to register a agent.',
			model: 'Register_Agent'
		},
		auth: [USER_ROLE.ADMIN],
		handler: userController.registerNewUser
	},
	{
		method: 'POST',
		path: '/v1/user/cashier',
		joiSchemaForSwagger: {
			body: {
				email: Joi.string().email().required().description('Resource\'s email.'),
				password: Joi.string().required().description('Resource\'s password.'),
				role: Joi.string().default(USER_ROLE.CASHIER).valid(USER_ROLE.CASHIER).description('Resource\'s role. should be cashier'),
				firstName: Joi.string().optional().description('User\'s first name.'),
				lastName: Joi.string().optional().description('User\'s last name.'),
				age: Joi.number().min(0).optional().description('User\'s age.'),
				dob: Joi.date().optional().description('User\'s  DOB .'),
				gender: Joi.string().valid(USER_GENDER.FEMALE, USER_GENDER.MALE, USER_GENDER.OTHER).optional().description('User\'s gender.')
			},
			group: 'User',
			description: 'Route to register a cashier.',
			model: 'Register_Cashier'
		},
		auth: [USER_ROLE.SITE],
		handler: userController.registerNewUser
	},
	{
		method: 'POST',
		path: '/v1/user/login',
		joiSchemaForSwagger: {
			body: {
				email: Joi.string().email().required().description('User\'s email Id.'),
				password: Joi.string().required().description('User\'s password.'),
			},
			group: 'User',
			description: 'Route to login a user.',
			model: 'Login'
		},
		handler: userController.loginUser
	}
];

module.exports = routes;