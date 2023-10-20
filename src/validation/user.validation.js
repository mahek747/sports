const Joi = require("joi");

const createUser = {
    body: Joi.object().keys(
        {
            user_name: Joi.string().required().trim(),
            first_name: Joi.string().required().trim(),
            last_name: Joi.string().required().trim(),
            address: Joi.string().required().trim(),
            dateOfBirth: Joi.string().required().trim(),
            team: Joi.string().required().trim(),
            founder: Joi.string().required().trim(),
            contactUs: Joi.string().required().trim(),
            sportsCategory: Joi.string().required().trim(),
            tournament: Joi.string().required().trim(),
        }
    )
}
module.exports = {
    createUser,
}
