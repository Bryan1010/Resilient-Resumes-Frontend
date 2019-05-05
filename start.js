const mongoose = require("mongoose");
const consola = require('consola');

// import env variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// console.log(`💥💥 ${process.env.DATABASE}`);
// Connect to DB and handle bad connections
// mongoClient.connect("mongodb://dev-resilient-resumes:VlizGl78drmrrDW66C4Qv6vx6tnUyEiVLzy1Hhu7PxcNtRgLMg0W4NiU5HkbwgGknnpF6VQgrkIwN9euvGkz8A%3D%3D@dev-resilient-resumes.documents.azure.com:10255/ResilientResumes?ssl=true", { useNewUrlParser: true }, function (err, client) {
//     console.error(err.message);
//     client.close();
// });
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
    console.error(`DB Connection Error🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// Start app
const app = require('./app');
app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    consola.ready({
        message: `Server listening on 
        http://${server.address().host}:${server.address().port}`,
        badge: true
    })
    console.log(`Express running ➡️ PORT ${server.address().port}`)
});