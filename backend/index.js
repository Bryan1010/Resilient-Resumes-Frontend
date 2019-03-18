var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var path = require("path");

const helpers = require('./helpers');


var app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:8000'
}));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.post('/getResumeScore', function (req, res) {
    var resume = req.body;
    res.type('application/json');

    res.send(JSON.stringify(helpers.AddRanking(resume)));

});