import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CalendarView from './components/CalendarView';
import EventForm from './components/EventForm';
import EventDetails from './components/EventDetails';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<CalendarView />} />
          <Route path="/add" element={<EventForm />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
