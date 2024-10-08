const mongoose = require('mongoose');


const FrameworkSchema = mongoose.Schema({
    ProfileID: {
        type: String,
        required: true
    },
    Framework: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Framework = mongoose.model('Frameworks', FrameworkSchema);

module.exports = Framework;