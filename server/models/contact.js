const mongoose = require('mongoose');


const ContactSchema = mongoose.Schema({
    "Phone number": {
        type: String,
        required: true
    },
    "Github link": {
        type: String,
        required: true
    },
    "LinkedIn link": {
        type: String,
        required: true
    },
    "X link": {
        type: String,
        required: true
    },

}, { timestamps: true })

const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact;