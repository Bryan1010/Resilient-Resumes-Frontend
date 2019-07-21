const mongoose = require('mongoose')
const Schema = mongoose.Schema

// achievement schema
const achievementSchema = new Schema({
  Name: String,
  Description: String
})

// activities Schema
const activitiesSchema = new Schema({
  Name: String,
  Description: String
})

// Relevant Course Schema
const relevantCourseSchema = new Schema({
  Name: String,
  Description: String
})

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
  Type: String
})

// Schools Schema
const schoolSchema = new Schema({
  Name: String,
  City: String,
  State: String,
  Country: String,
  Majors: [{
    DegreeType: String,
    Name: String
  }],
  Minors: [String],
  Graduation: Date,
  Gpa: Schema.SchemaTypes.Double
})

// Skill Schema
const skillSchema = new Schema({
  Name: String,
  Level: Number
})

const resumeSchema = new Schema({
  User: {
    type: Schema.ObjectId,
    required: true,
    ref: 'User'
  },
  ContactInfo: {
    Email: String,
    Phone: String
  },
  ObjectiveStatement: String,
  PositionApplyingFor: String,
  Achievements: [achievementSchema],
  Activities: [activitiesSchema],
  Experiences: [experienceSchema],
  Name: {
    FName: [String],
    LName: String,
    Suffix: String
  },
  RelevantCourses: [relevantCourseSchema],
  Schools: [schoolSchema],
  Skills: {
    Frameworks: [skillSchema],
    Languages: [skillSchema],
    OS: [skillSchema]
  },
  Websites: {
    Github: String,
    LinkedIn: String,
    PersonalWebsite: String
  }
})

module.exports = mongoose.model('Resume', resumeSchema)
