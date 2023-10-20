const express = require("express");

const { contactUsValidation } = require("../../validation");
const { contactUsController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createContactUs",
    validate(contactUsValidation.createContactUs),
    contactUsController.createContactUs
);

router.get(
    "/getList",
    contactUsController.getContactUsList
);

router.get(
    "/getDetails/:contactUsId",
    contactUsController.getContactUsDetails
);

router.put(
    "/update/:contactUsId",
    contactUsController.updateContactUs
);

router.delete(
    "/delete/:contactUsId",
    contactUsController.deleteContactUs
);

module.exports = router;