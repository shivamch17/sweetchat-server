const User = require('../models/userModel');
const asyncErrorHandler = require('../middlewares/asyncErrorHandler');
exports.registerUser = asyncErrorHandler(async (req, res, next) => {
    const { name , username} = req.body;
    const user = await User.findOne({ name: name, username: username });
    if(user)
    {
        res.status(200).json({
            success: true,
            user,
        });
    }
    else
    {  
        const user = await User.create({
            name,
            username
        });
        res.status(201).json({
            success: true,
            user,
        });
    }
});
