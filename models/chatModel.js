const mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    chat: {
        type: String,
        required: true
    },
    roomid: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Chat', chatSchema);