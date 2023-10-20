const { Tournament } = require("../models");

const createTournament = async (reqBody) => {
    return Tournament.create(reqBody);
}

const getTournamentList = async (req, res) => {
    return Tournament.find()
    .populate("team")
    .populate("founder")
}

const getTournamentById = async (tournamentId) => {
    return Tournament.findById(tournamentId);
}

const updateRecord = async (tournamentId, updateBody) => {
    return Tournament.findByIdAndUpdate(tournamentId, { $set: updateBody })
}

const deleteRecord = async (tournamentId) => {
    return Tournament.findByIdAndDelete(tournamentId);
}

module.exports = {
    createTournament,
    getTournamentById,
    getTournamentList,
    updateRecord,
    deleteRecord
}
