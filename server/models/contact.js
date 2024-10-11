const mongoose = require('mongoose');


const ContactSchema = mongoose.Schema({
    "ProfileID": {
        type: String,
        required: true
    },
    "PhoneNumber": {
        type: String,
        required: true
    },
    "Github": {
        type: String,
        required: true
    },
    "LinkedIn": {
        type: String,
        required: true
    },
    "X": {
        type: String,
        required: true
    },

}, { timestamps: true })

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;