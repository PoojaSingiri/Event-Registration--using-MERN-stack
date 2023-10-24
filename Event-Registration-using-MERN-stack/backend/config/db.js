const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://Sports-App'; 

// Create a function to connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectDB;
