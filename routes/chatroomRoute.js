const express = require('express');
const {verifyRoom} = require('../controllers/chatRoomController');

const router = express.Router();

router.route('/verifyRoom').post(verifyRoom);

module.exports = router;