import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);
  const [registrationStatus, setRegistrationStatus] = useState('');

  // Fetch the list of events from the backend
  useEffect(() => {
    axios.get('/events/all')
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
  }, []);

  const handleEventRegistration = (event) => {
    if (selectedEvents.length < 3) {
      if (!selectedEvents.some((e) => e.id === event.id)) {
        setSelectedEvents([...selectedEvents, event]);
        setRegistrationStatus('Event registered successfully');
      } else {
        setRegistrationStatus('Event already registered');
      }
    } else {
      setRegistrationStatus('You can only register for up to 3 events');
    }
  };

  const handleEventDeregistration = (event) => {
    const updatedEvents = selectedEvents.filter((e) => e.id !== event.id);
    setSelectedEvents(updatedEvents);
    setRegistrationStatus('Event deregistered successfully');
  };

  return (
    <div className="event-list">
      <h2>Available Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <span>{event.event_name} ({event.event_category})</span>
            <span>{event.start_time} - {event.end_time}</span>
            <button onClick={() => handleEventRegistration(event)}>Register</button>
          </li>
        ))}
      </ul>
      <h2>Selected Events</h2>
      <ul>
        {selectedEvents.map((event) => (
          <li key={event.id}>
            <span>{event.event_name} ({event.event_category})</span>
            <span>{event.start_time} - {event.end_time}</span>
            <button onClick={() => handleEventDeregistration(event)}>Deregister</button>
          </li>
        ))}
      </ul>
      <p className="registration-status">{registrationStatus}</p>
    </div>
  );
}

export default EventList;
