const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
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

__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });
} else {
    app.get('/', (req, res) => {
        res.send('Server is Running! 🚀');
    });
}

app.use(errorMiddleware);

module.exports = app;
