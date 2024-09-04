import React from 'react';

class EventDetails extends React.Component {
  state = {
    event: null
  };

  componentDidMount() {
    // Fetch event details using this.props.match.params.id
  }

  render() {
    const { event } = this.state;
    return event ? (
      <div>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default EventDetails;
