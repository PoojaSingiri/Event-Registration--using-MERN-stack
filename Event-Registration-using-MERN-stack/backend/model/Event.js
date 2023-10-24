const mongoose = require('mongoose');

// Define the Event schema
const eventSchema = new mongoose.Schema({
  event_name: String,
  event_category: String,
  start_time: Date,
  end_time: Date,
  registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

// Create an Event model
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;
