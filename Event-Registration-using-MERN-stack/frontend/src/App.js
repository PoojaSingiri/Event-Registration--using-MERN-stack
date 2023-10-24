import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components
import EventList from './components/EventList';
import SelectedEvents from './components/SelectedEvents';
import UserRegistration from './components/UserRegistration';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          {/* Route for the event list */}
          <Route path="/" exact component={EventList} />

          {/* Route for the selected events */}
          <Route path="/selected" component={SelectedEvents} />

          {/* Route for user registration */}
          <Route path="/registration" component={UserRegistration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
