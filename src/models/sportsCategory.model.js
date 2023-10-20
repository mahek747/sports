const mongoose = require("mongoose");

const sportsCategorySchema = new mongoose.Schema(
    {
        sportsGallery: {
            type: mongoose.Types.ObjectId,
            ref: "sportsGallery"
        },
        name: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        sports: {
            type: String,
            trim: true
        },
        color_code: {
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

const SportsCategory = mongoose.model("sportsCategory", sportsCategorySchema);
module.exports = SportsCategory
