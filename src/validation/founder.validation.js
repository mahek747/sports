const Joi = require("joi");

const createFounder = {
    body: Joi.object().keys(
        {
            name: Joi.string().required().trim(),
            dateOfBirth: Joi.string().required().trim(),
            user: Joi.string().required().trim(),
            agency: Joi.string().required().trim(),
            clients: Joi.number().integer(),
            contactUs: Joi.string().required().trim()
        }
    )
}

module.exports = {
    createFounder
}
