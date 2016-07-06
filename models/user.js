var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var UserSchema = mongoose.Schema({
  username: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String,
    bcrypt: true
  },
  type: {
    type: String
  }
});

var User = module.exports = mongoose.model('User', UserSchema);

// Get Single User
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

//Get User by username
module.exports.getUserByUsername = function(username, callback){
  var query = {username: username};
  User.findOne(query, callback);
}

//Compare Password
module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch){
    callback(null, isMatch);
  });
}

//Create Student User
module.exports.saveStudent = function(newUser, newStudent, callback){
  bcrypt.hash(newUser.password, 10, function(err, hash){
    if (err) throw err;
    //Setting Hash
    newUser.password = hash;
    console.log('Student is being saved');
    async.parallel([newUser.save, newStudent.save], callback);
  });
}


//Create Instructor User
module.exports.saveInstructor = function(newUser, newInstructor, callback){
  bcrypt.hash(newUser.password, 10, function(err, hash){
    if (err) throw err;
    //Setting Hash
    newUser.password = hash;
    console.log('Student is being saved');
    async.parallel([newUser.save, newInstructor.save], callback);
  });
}
