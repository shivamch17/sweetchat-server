const express = require('express');
const { getAllChats, createNewChat,getNewChats } = require('../controllers/chatController');

const router = express.Router();

router.route('/getChats').post(getAllChats);
router.route('/getNewChats').post(getNewChats);
router.route('/postChats').post(createNewChat);

module.exports = router;