const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    passkey: {
        type: String,
        required: true
    }
}, { timestamps: true })

const ProfileModel = mongoose.model('Login', LoginSchema);

module.exports = ProfileModel;