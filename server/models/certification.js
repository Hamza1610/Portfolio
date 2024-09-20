const mongoose = require('mongoose');


const CertificationSchema = mongoose.Schema({
    "Certification type": {
        type: String,
        required: true
    },
    "Certification Link": {
        type: String,
        required: true
    },

}, { timestamps: true })

const Certification = mongoose.model('Certification', CertificationSchema);

module.exports = Certification;