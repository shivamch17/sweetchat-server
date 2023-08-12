const Chat = require('../models/chatModel');
const Room = require('../models/chatRoomModel');
const User = require('../models/userModel');
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");

exports.getAllChats = async(req, res, next) => {
    const {roomid}=req.body;
    const chat = await Chat.find({ roomid: roomid });
        res.status(200).json({
            success: true,
            chat,
        });
};

exports.getNewChats = async(req, res, next) => {
    const {roomid,createdAt}=req.body;
    // console.log(roomid,createdAt);
    const chat = await Chat.find({ roomid: roomid, createdAt: { $gt: createdAt } });
        res.status(200).json({
            success: true,
            chat,
        });
};

exports.createNewChat = asyncErrorHandler(async (req, res, next) => {
    const { roomid, msg ,username} = req.body;
    const room = await Room.findOne({ roomid: roomid});
    const user = await User.findOne({ username: username});
    if(room && user)
    {
        const chat = await Chat.create({
            chat:msg,
            roomid,
            username,
        });

        res.status(201).json({
            success: true,
            chat
        });
    }
    else
    {
        res.status(404).json({
            success: false,
            error: "Room does not exists"
        });
    }
});