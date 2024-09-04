import React from 'react';
import Calendar from 'react-calendar';

class CalendarView extends React.Component {
  state = {
    selectedDate: new Date(),
    events: []
  };

  onDateChange = date => this.setState({ selectedDate: date });

  render() {
    return (
      <div>
        <Calendar onChange={this.onDateChange} value={this.state.selectedDate} />
        {/* List events for the selected date */}
      </div>
    );
  }
}

export default CalendarView;
