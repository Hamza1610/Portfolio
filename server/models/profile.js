const mongoose = require('mongoose');


const ProfileSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;