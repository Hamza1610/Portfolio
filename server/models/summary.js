const mongoose = require('mongoose');


const SummarySchema = mongoose.Schema({
    Summary: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Summary = mongoose.model('Summary', SummarySchema);

module.exports = Summary;