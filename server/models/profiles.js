const mongoose = require('mongoose');


const ProfileSchema = mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    detail: {
        type: String,
        required: true
    }
}, { timestamps: true })

const ProfileModel = mongoose.model('Profile', ProfileSchema);

module.exports = ProfileModel;