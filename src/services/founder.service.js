const { Founder } = require("../models");

const createFounder = async (reqBody) => {
    return Founder.create(reqBody);
}

const getFounderList = async (req, res) => {
    return Founder.find().populate("user").populate("contactUs");
}

const getFounderById = async (founderId) => {
    return Founder.findById(founderId);
}

const updateRecord = async (founderId, updateBody) => {
    return Founder.findByIdAndUpdate(founderId, { $set: updateBody })
}

const deleteRecord = async (founderId) => {
    return Founder.findByIdAndDelete(founderId);
}

module.exports = {
    createFounder,
    getFounderById,
    getFounderList,
    updateRecord,
    deleteRecord
}
