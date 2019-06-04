const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
const md5 = require('md5');
const validator = require('validator');
const jwt = require('jsonwebtoken');

// const mongodbErrorHandler = require('mongoose-mongodb-errors');
// const passportLocalMongoose = require('passport-local-mongoose');
// const crypto = require('crypto');


const resumeSchema = new Schema({
    User: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: 'You must Suply an owner!'
    },
    ContactInfo: {
        Email: String,
        Phone: String,
    },
    ObjectiveStatement: String,
    PositionApplyingFor: String,
    Achievements: [achievementSchema],
    Activities: [activitiesSchema],
    Experiences: [experienceSchema],
    Name: {
        FName: String,
        LName: String,
        Suffix: String,
    },
    RelevantCourses: [relevantCourseSchema],
    Schools: [schoolSchema],
    Skills: {
        Frameworks: Array,
        Languages: Array,
        OS: Array,
    },
    Websites: {
        Github: String,
        LinkedIn: String,
        PersonalWebsite: String,
    },
});

// achievement schema
const achievementSchema = new Schema({
    Name: String,
    Description: String,
});

// activities Schema
const activitiesSchema = new Schema({
    Name: String,
    Description: String,
});

// Relevant Course Schema
const relevantCourseSchema = new Schema({
    Name: String,
    Description: String,
});

// Experience Schema
const experienceSchema = new Schema({
    City: String,
    State: String,
    Country: String,
    Description: String,
    StartDate: Date,
    EndDate: String, // It's a string because it can be the PRESENT. We need to check that if it's a date or a string before Displaying
    Name: String,
    Position: String,
    Project: String,
    ProjectDescription: String,
    ProjectOutcome: String,
    Type: String,
});

// Schools Schema
const schoolSchema = new Schema({
    Name: String,
    City: String,
    State: String,
    Country: String,
    Majors: [{
        DegreeType: String,
        Name: String,
    }],
    Minors: [String],
    Graduation: Date,
    Gpa: Schema.SchemaTypes.Double,
});

module.exports = mongoose.model('Resume', resumeSchema);