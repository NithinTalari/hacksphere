// pages/Mentors.jsx
import React from 'react';

export default function Mentors({ data }) {
  return (
    <section className="mentors container">
      <h2 className="section-title">Meet the Mentors</h2>
      <div className="grid">
        {data.map((mentor, idx) => (
          <div key={idx} className="problem-card">
            <h3>{mentor.name}</h3>
            <p>{mentor.expertise}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
