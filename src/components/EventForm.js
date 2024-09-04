import React from 'react';

class EventForm extends React.Component {
  state = {
    title: '',
    date: this.props.date || new Date(),
    description: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Event Title"
        />
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
          placeholder="Event Description"
        />
        <button type="submit">Save Event</button>
      </form>
    );
  }
}

export default EventForm;
