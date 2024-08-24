const mongoose = require('mongoose');


const ProfileSchema = mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;