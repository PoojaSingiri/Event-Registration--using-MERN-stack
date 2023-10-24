const express = require('express');
const router = express.Router();

const eventsController = require('../controllers/events');

// Define routes for event-related operations
router.get('/', eventsController.getAllEvents);
router.post('/register', eventsController.registerForEvent);
router.post('/unregister', eventsController.unregisterFromEvent);

module.exports = router;
