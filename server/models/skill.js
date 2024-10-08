const mongoose = require('mongoose');


const SkillSchema = mongoose.Schema({
    ProfileID: {
        type: String,
        required: true
    },
    Skills: {
        type: String,
        required: true
    },

}, { timestamps: true })

const Skill = mongoose.model('Skills', SkillSchema);

module.exports = Skill;