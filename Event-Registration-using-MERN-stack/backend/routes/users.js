const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model

// Create User API
router.post('/create', async (req, res) => {
  try {
    const { username } = req.body;
    // Validate and save the user to the database
    const user = new User({ username });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Login User API
const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Assuming you have a User model
const bcrypt = require('bcrypt'); // Importing the bcrypt library for password hashing

// Login User API
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database by username
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Validate the password by comparing the provided password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;






