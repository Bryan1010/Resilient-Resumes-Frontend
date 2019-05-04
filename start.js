const mongoose = require('mongoose');

// import env variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to DB and handle bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`💥💥💥💥💥💥 ➡️ ${err.message}`);
});

// Start app
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running ➡️ PORT ${server.address().port}`)
});