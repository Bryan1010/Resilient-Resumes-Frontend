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

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});

app.post('/getResumeScore', function (req, res) {
    var resume = req.body;
    res.type('application/json');

    res.status(200).json(helpers.AddRanking(resume));
    // res.send(JSON.stringify(helpers.AddRanking(resume)));

});