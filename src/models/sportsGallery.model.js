const mongoose = require("mongoose");

const sportsGallerySchema = new mongoose.Schema(
    {
        uploadedBy: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        team: {
            type: mongoose.Types.ObjectId,
            ref: "team"
        },
        sportsCategory: {
            type: mongoose.Types.ObjectId,
            ref: "sportsCategory"
        },
        title: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        media_type: {
            type: String,
            trim: true
        },
        sports_image: {
            type: String,
            trim: true,
        },
        sports_events: {
            type: String,
            trim: true
        },
        athlete: {
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
        versionKey: false,
    }
);

const SportsGallery = mongoose.model("sportsGallery", sportsGallerySchema);
module.exports = SportsGallery
