const mongoose = require('mongoose');


const MessageSchema = mongoose.Schema({
    "Name": {
        type: String,
        required: true
    },
    "Email": {
        type: String,
        required: true
    },
    "Message": {
        type: String,
        required: true
    },
 
}, { timestamps: true })

const Message = mongoose.model('Messages', MessageSchema);

module.exports = Message;