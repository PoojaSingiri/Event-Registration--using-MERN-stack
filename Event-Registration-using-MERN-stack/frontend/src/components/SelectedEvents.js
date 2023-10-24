import React from 'react';
import './App.css'; // Import the CSS file

const SelectedEvents = ({ selectedEvents, onDeselectEvent }) => {
  return (
    <div className="container">
      <div className="event-list">
        {/* Display all selected events */}
        <h2>Selected Events</h2>
        {selectedEvents.map((event) => (
          <div key={event.id} className="event-card">
            <h3>{event.event_name}</h3>
            <p>Category: {event.event_category}</p>
            <p>Timings: {event.start_time} - {event.end_time}</p>
            <button
              className="deselect-button"
              onClick={() => onDeselectEvent(event.id)}
            >
              Deselect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedEvents;
