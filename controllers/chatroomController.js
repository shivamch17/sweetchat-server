const Room = require('../models/chatRoomModel');
const asyncErrorHandler = require("../middlewares/asyncErrorHandler");

exports.verifyRoom = asyncErrorHandler(async (req, res, next) => {
    const { roomid, key } = req.body;
    const room = await Room.findOne({ roomid: roomid, key: key });
    try
    {
        if(room)
        {
            res.status(200).json({
                success: true,
                room,
            });
        }
        else
        {   const room = await Room.create({
            key,
            roomid,
            });

            res.status(201).json({
                success: true,
                room,
            });
        }
    }
    catch(error)
    {
        if (error.code === 11000) {
            res.status(409).json({
              success: false,
              message: 'Chatroom with the same roomid already exists.',
            });
        }
    }
});