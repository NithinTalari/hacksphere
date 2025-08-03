// pages/Timeline.jsx
import React from 'react';

export default function Timeline({ data }) {
  return (
    <section className="container">
      <h2 className="section-title">Event Timeline</h2>
      <ul className="timeline">
        {data.map((event, idx) => (
          <li key={idx}>
            <strong>{event.date}</strong>: {event.description}
          </li>
        ))}
      </ul>
    </section>
  );
}
