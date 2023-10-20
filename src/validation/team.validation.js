const Joi = require("joi");

const createTeam = {
    body: Joi.object().keys(
        {
            name: Joi.string().required().trim(),
            founded_year: Joi.number().integer(),
            home_venue: Joi.string().required().trim(),
            headCoach: Joi.string().required().trim(),
            championships: Joi.string().required().trim(),
            user: Joi.string().required().trim(),
            tournament: Joi.string().required().trim(),
        }
    )
}

module.exports = {
    createTeam
}
