const mongoose = require('mongoose');
const chatRoomSchema = new mongoose.Schema({
    roomid: {
        type: Number,
        required: true,
        unique: true
    },
    key: {
        type: Number,
        required: true
    }
});
module.exports = mongoose.model('ChatRoom', chatRoomSchema);