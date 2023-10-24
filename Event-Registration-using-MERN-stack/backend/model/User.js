const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Create a User model
const User = mongoose.model('User', userSchema);

module.exports = User;
