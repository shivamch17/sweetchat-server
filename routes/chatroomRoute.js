const express = require('express');
const {verifyRoom} = require('../controllers/chatroomController');

const router = express.Router();

router.route('/verifyRoom').post(verifyRoom);

module.exports = router;