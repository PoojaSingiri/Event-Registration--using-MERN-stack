// Import necessary dependencies and models
const User = require('../models/User');

// Controller function to create a new user
const createUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: 'Username is already in use' });
    }

    // Create a new user
    const user = new User({ username, password });

    await user.save();

    res.json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to log in a user
const loginUser = async (req, res) => {
  const { username } = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User logged in successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = {
  createUser,
  loginUser,
 
};
