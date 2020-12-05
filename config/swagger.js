const { USER_ROLE } = require('../app/utils/constants');
let swaggerConfig = {
  "swagger": "2.0",
  "info": {
    "version": "2.0.0",
    "title": "Simform Task",
    "description": "Project",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "name": "Simform Team"
    },
    "license": {
      "name": "MIT"
    }
  },
  "paths": {},
  "definitions": {},
  "schemes": [
    "http",
    "https"
  ],
  "consumes": [
    "application/json"
  ],
  "produces": [
    "application/json"
  ],
  "securityDefinitions": { // security definitions can be multiple 
    "UserTokenHeader": {
      "type": "apiKey",
      "name": "authorization",
      "in": "header"
    }
  },
  "security": [
    {
      "UserTokenHeader": [] // global security defined based on security definition
    }
  ],
};


module.exports = swaggerConfig;
