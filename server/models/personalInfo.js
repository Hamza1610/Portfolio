const mongoose = require('mongoose');


const PersonalInfoSchema = mongoose.Schema({
    ProfileID: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
}, { timestamps: true })

const PersonalInfo = mongoose.model('PersonalInfo', PersonalInfoSchema);

module.exports = PersonalInfo;
