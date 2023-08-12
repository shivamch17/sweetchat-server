const app = require('./app');
const connectDatabase = require('./config');
const PORT = process.env.PORT || 4000;
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

connectDatabase();

app.listen(PORT, () => {
    console.log(`Server running on https://sweetchat-1-m9201062.deta.app`)
});

process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    server.close(() => {
        process.exit(1);
    });
});
