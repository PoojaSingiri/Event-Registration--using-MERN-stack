// Import necessary dependencies and models
const Event = require('../models/Event');

// Controller function to get all events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to register a user for an event
const registerForEvent = async (req, res) => {
  const { userId, eventId } = req.body;

  try {
    // Check if the user is already registered for the event
    const existingRegistration = await Event.findOne({ _id: eventId, registeredUsers: userId });

    if (existingRegistration) {
      return res.status(400).json({ error: 'User is already registered for this event' });
    }

    // Register the user for the event
    await Event.updateOne({ _id: eventId }, { $push: { registeredUsers: userId } });

    res.json({ message: 'User registered for the event successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller function to unregister a user from an event
const unregisterFromEvent = async (req, res) => {
  const { userId, eventId } = req.body;

  try {
    // Check if the user is registered for the event
    const existingRegistration = await Event.findOne({ _id: eventId, registeredUsers: userId });

    if (!existingRegistration) {
      return res.status(400).json({ error: 'User is not registered for this event' });
    }

    // Unregister the user from the event
    await Event.updateOne({ _id: eventId }, { $pull: { registeredUsers: userId } });

    res.json({ message: 'User unregistered from the event successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



module.exports = {
  getAllEvents,
  registerForEvent,
  unregisterFromEvent,
  
};
