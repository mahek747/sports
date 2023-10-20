const { contactUs } = require("../models");

const createContactUs = async (reqBody) => {
    return cancelAnimationFrameContactUs.create(reqBody);
}

const getContactUsList = async (req, res) => {
    return contactUs.find().populate("user");
}

const getContactUsDetails = async (contactUsId) => {
    return contactUs.findById(contactUsId);
}

const updateRecord = async (contactUsId, updateBody) => {
    return contactUs.findByIdAndUpdate(contactUsId, { $set: updateBody })
}

const deleteRecord = async (contactUsId) => {
    return contactUs.findByIdAndDelete(contactUsId);
}

module.exports = {
    createContactUs,
    getContactUsDetails,
    getContactUsList,
    updateRecord,
    deleteRecord
}
