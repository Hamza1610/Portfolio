const mongoose = require('mongoose');


const EducationSchema = mongoose.Schema({
    Institution: {
        type: String,
        required: true
    },
    "Started year": {
        type: Date,
        required: true
    },
    "Finish year": {
        type: Date,
        required: false
    },
}, { timestamps: true })

const Education = mongoose.model('Education', EducationSchema);

module.exports = Education;