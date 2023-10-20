const express = require("express");

const { tournamentValidation } = require("../../validation");
const { tournamentController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createTournament",
    validate(tournamentValidation.createTournament),
    tournamentController.createTournament
);

router.get(
    "/getList",
    tournamentController.getTournamentList
);

router.get(
    "/getDetails/:tournamentId",
    tournamentController.getTournamentDetails
);

router.put(
    "/update/:tournamentId",
    tournamentController.updateTournament
);

router.delete(
    "/delete/:tournamentId",
    tournamentController.deleteTournament
);

module.exports = router;
