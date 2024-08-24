const mongoose = require('mongoose');


const ProjectSchema = mongoose.Schema({
    "Name": {
        type: String,
        required: true
    },
    "Stack": {
        type: String,
        required: true
    },
    "Details": {
        type: String,
        required: true
    },
    "Technologies": {
        type: String,
        required: true
    },
    "Codebase link": {
        type: String,
        required: true
    },
    "Demo link": {
        type: String,
        required: true
    }

}, { timestamps: true })

const Project = mongoose.model('Projects', ProjectSchema);

module.exports = Project;