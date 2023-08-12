const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const errorMiddleware = require('./middlewares/error');
require('dotenv').config();

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const user = require('./routes/userRoute');
const chat = require('./routes/chatRoute');
const chatRoom = require('./routes/chatroomRoute');

app.use('/api/v1', user);
app.use('/api/v1', chat);
app.use('/api/v1', chatRoom);

app.get('/', (req, res) => {
        res.send('Server is Running! 🚀');
});

app.use(errorMiddleware);

module.exports = app;
