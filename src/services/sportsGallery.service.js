const { SportsGallery } = require("../models");

const createSportsGallery = async (reqBody) => {
    return SportsGallery.create(reqBody);
}

const getSportsGalleryList = async (req, res) => {
    return SportsGallery.find().populate("sportsCategory").populate("uploadedBy").populate("team");
}

const getSportsGalleryById = async (sportsGalleryId) => {
    return SportsGallery.findById(sportsGalleryId);
}

const updateRecord = async (sportsGalleryId, updateBody) => {
    return SportsGallery.findByIdAndUpdate(sportsGalleryId, { $set: updateBody })
}

const deleteRecord = async (sportsGalleryId) => {
    return SportsGallery.findByIdAndDelete(sportsGalleryId);
}

module.exports = {
    createSportsGallery,
    getSportsGalleryById,
    getSportsGalleryList,
    updateRecord,
    deleteRecord
}
