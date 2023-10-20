const express = require("express");

const contactUsRoute = require("./contactUs.route");
const userRoute = require("./user.route");
const founderRoute = require("./founder.route");
const tournamentRoute = require("./tournament.route");
const sportsGalleryRoute = require("./sportsGallery.route");
const sportsCategoryRoute = require("./sportsCategory.route");
const teamRoute = require("./team.route");

const router = express.Router();

router.use("/contactUs", contactUsRoute);
router.use("/user", userRoute);
router.use("/founder", founderRoute);
router.use("/tournament", tournamentRoute);
router.use("/sportsGallery", sportsGalleryRoute);
router.use("/sportsCategory", sportsCategoryRoute);
router.use("/teamUs", teamRoute);

module.exports = router;