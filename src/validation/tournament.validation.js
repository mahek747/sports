const Joi = require("joi");

const createTournament = {
    body: Joi.object().keys(
        {
            name: Joi.string().required().trim(),
            description: Joi.string().required().trim(),
            location: Joi.string().required().trim(),
            organizer: Joi.string().required().trim(),
            team: Joi.string().required().trim(),
            matches: Joi.string().required().trim(),
            founder: Joi.string().required().trim(),
        }
    )
}

module.exports = {
    createTournament
}
