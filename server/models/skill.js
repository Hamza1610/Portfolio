const mongoose = require('mongoose');


const SkillSchema = mongoose.Schema({
    skills: {
        type: String,
        required: true
    },
}, { timestamps: true })

const Skill = mongoose.model('Profile', SkillSchema);

module.exports = Skill;