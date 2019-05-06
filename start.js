const mongoose = require('mongoose');
var mongoClient = require("mongodb").MongoClient;

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`DB Connection Error 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

//import data modelsˀ
require(`./models/users`);

// Start our app!
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`💻 Express running → PORT ${server.address().port}`);
});