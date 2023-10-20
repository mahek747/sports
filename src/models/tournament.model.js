const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        location: {
            type: String,
            trim: true
        },
        organizer: {
            type: String,
            trim: true
        },
        team: {
            type: mongoose.Types.ObjectId,
            ref: "team"
        },
        founder: {
            type: mongoose.Types.ObjectId,
            ref: "founder"
        },
        matches: {
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

const tournament = mongoose.model("tournament", tournamentSchema);
module.exports = tournament