var mongoose = require('mongoose');

//Instructor Schema
var InstructorSchema = mongoose.Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  address: [{
    street_address: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: String}
  }],
  username: {
    type: String
  },
  email: {
    type: String
  },
  classes: [{
    class_id: {type: [mongoose.Schema.Types.ObjectId]},
    class_title: {type: String}
  }]
});

//Setting variable to be available outside of this file
var Instructor = module.exports = mongoose.model('Instructor', InstructorSchema);
