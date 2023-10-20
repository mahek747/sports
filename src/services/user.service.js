const { User } = require("../models");

const createUser = async (reqBody) => {
    return User.create(reqBody);
}

const getUserList = async (req, res) => {
    return User.find(req , res)
    .populate("team").populate("founder")
    .populate("contactUs").populate("sportsGallery")
    .populate("sportsCategory").populate("tournament");
}

const getUserById = async (userId) => {
    return User.findById(userId);
}

const updateRecord = async (userId, updateBody) => {
    return User.findByIdAndUpdate(userId, { $set: updateBody })
}

const deleteRecord = async (userId) => {
    return User.findByIdAndDelete(userId);
}

module.exports = {
    createUser,
    getUserById,
    getUserList,
    updateRecord,
    deleteRecord
}
