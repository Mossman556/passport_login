const mongoose = require('mongoose');

// Define a schema for the User model
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // name field is required
  },
  email: {
    type: String,
    required: true // email field is required
  },
  password: {
    type: String,
    required: true // password field is required
  },
  date: {
    type: Date,
    default: Date.now // date field is added with the current date
  }
});

// Create the User model based on the schema
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;
