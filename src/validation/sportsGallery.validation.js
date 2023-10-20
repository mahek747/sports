const Joi = require("joi");

const createSportsGallery = {
    body: Joi.object().keys(
        {
            title: Joi.string().required().trim(),
            description: Joi.string().required().trim(),
            sports_image: Joi.string().allow(""),
            media_type: Joi.string().required().trim(),
            sports_events: Joi.string().required().trim(),
            athlete: Joi.string().required().trim(),
            uploadedBy: Joi.string().required().trim(),
            team: Joi.string().required().trim(),
            sportsCategory: Joi.string().required().trim(),
        }
    )
}

module.exports = {
    createSportsGallery
}
