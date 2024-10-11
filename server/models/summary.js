const mongoose = require('mongoose');


const SummarySchema = mongoose.Schema({
    Content: {
        type: String,
        required: true
    },
    ProfileID: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Summary = mongoose.model('Summary', SummarySchema);

module.exports = Summary;