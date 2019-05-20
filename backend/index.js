const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
// const auth = require('./auth');

// const MongoStore = require('connect-mongo')(session);

// import environmental variables from our variables.env file
require('dotenv').config({ path: '../variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`DB Connection Error 🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

require('./models/user');
require('./config/passport');

// define express instance Express Instance
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/test', (req, res) => {
    res.json({type: 'success', message: 'Test OK'});
});

app.use(require('./routes'));
// app.use('/auth', auth({ express, jwt, jwtToken: process.env.SECRET }));

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
  console.log(`💻 Express running → PORT ${server.address().port}`);
});