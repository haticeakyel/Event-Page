import React, { useState } from 'react';
import EventDetail from './EventDetail';

function Events(props) {
  const {
    events
  } = props

  return (
    <div>
    {events &&
      events.map((event, index) => {
        return (
          <div style={{ display: "contents" }} key={index}>
            <EventDetail event={event} />
          </div>
        );
      })}
      
    </div>
  );
}
export default Events;
