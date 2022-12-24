const mongoose = require("mongoose");

const cafeSchema = new mongoose.Schema({
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
    }
})

const cafe = mongoose.model("cafe", cafeSchema);
module.exports = cafe;