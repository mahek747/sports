const Joi = require("joi");

const createSportsCategory = {
    body: Joi.object().keys(
        {
            name: Joi.string().required().trim(),
            description: Joi.string().required().trim(),
            sports: Joi.string().required().trim(),
            color_code: Joi.string().required().trim(),
            sportsGallery : Joi.string().required().trim()
        }
    )
}

module.exports = {
    createSportsCategory
}
