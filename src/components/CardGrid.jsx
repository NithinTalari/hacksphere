import React from 'react';

export default function CardGrid({ items = [] }) {
  if (!Array.isArray(items)) {
    console.error('CardGrid expects an array but received:', items);
    return <p>Error loading cards. Please try again later.</p>;
  }

  return (
    <div className="card-grid">
      {items.map((item, index) => (
        <div key={index} className="card">
          {item.image && (
            <img
              src={item.image}
              alt={item.title || `Event ${index + 1}`}
              className="card-img"
            />
          )}
          <h3 className="card-title">{item.title}</h3>
          <p className="card-subtitle">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
