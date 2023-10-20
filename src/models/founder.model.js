const mongoose = require("mongoose");

const founderSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        dateOfBirth: {
            type: String,
            trim: true
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        agency: {
            type: String,
            trim: true
        },
        clients: {
            type: String,
            trim: true
        },
        contactUs: {
            type: mongoose.Types.ObjectId,
            ref: "contactUs"
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

const Founder = mongoose.model("founder", founderSchema);
module.exports = Founder
