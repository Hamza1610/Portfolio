const mongoose = require('mongoose');


const PersonalInfoSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
}, { timestamps: true })

const PersonalInfo = mongoose.model('PersonalInfo', PersonalInfoSchema);

module.exports = PersonalInfo;