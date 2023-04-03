const mongoose = require("mongoose");

const pgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        // required: true
    },
    image_url: {
        type: String,
        // required: true
    },
    ratings: {
        type: String,
        // required: true
    },
    pricing: {
        type: String,
        // required: true
    }
})

const pg = mongoose.model("pg", pgSchema);
module.exports = pg;