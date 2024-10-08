const mongoose = require('mongoose');


const EducationSchema = mongoose.Schema({
    ProfileID: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    "Started": {
        type: Date,
        required: false
    },
    "Finish": {
        type: Date,
        required: false
    },
}, { timestamps: true })

const Education = mongoose.model('Education', EducationSchema);

module.exports = Education;