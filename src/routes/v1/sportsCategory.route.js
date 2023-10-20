const express = require("express");

const { sportsCategoryValidation } = require("../../validation");
const { sportsCategoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createSportsCategory",
    validate(sportsCategoryValidation.createSportsCategory),
    sportsCategoryController.createSportsCategory
);

router.get(
    "/getList",
    sportsCategoryController.getSportsCategoryList
);

router.get(
    "/getDetails/:sportsCategoryId",
    sportsCategoryController.getSportsCategoryDetails
);

router.put(
    "/update/:sportsCategoryId",
    sportsCategoryController.updateSportsCategory
);

router.delete(
    "/delete/:sportsCategoryId",
    sportsCategoryController.deleteSportsCategory
);

module.exports = router;
