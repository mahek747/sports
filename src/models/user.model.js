const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        team: {
            type: mongoose.Types.ObjectId,
            ref: "team"
        },
        founder: {
            type: mongoose.Types.ObjectId,
            ref: "founder"
        },
        contactUs: {
            type: mongoose.Types.ObjectId,
            ref: "contactUs"
        },
        sportsGallery: {
            type: mongoose.Types.ObjectId,
            ref: "sportsGallery"
        },
        sportsCategory: {
            type: mongoose.Types.ObjectId,
            ref: "sportsCategory"
        },
        tournament: {
            type : mongoose.Types.ObjectId,
            ref : "tournament"
        },
        user_name: {
            type: String,
            trim: true
        },
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        dateOfBirth: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User