import React, { useState } from 'react';
import problems from '../data/problems.json';
import timeline from '../data/timeline.json';
import '../styles/global.css'; // Ensure styles are included

const CombinedSection = () => {
  const [selectedProblem, setSelectedProblem] = useState(null);

  const openPopup = (problem) => {
    setSelectedProblem(problem);
  };

  const closePopup = () => {
    setSelectedProblem(null);
  };

  return (
    <section className="combined-section">
      {/* Problem Statements - Left */}
      <div className="half-section">
        <h2 className="section-heading">Problem Statements</h2>
        <div className="card-container">
          {problems.map((item, index) => (
            <div
              key={index}
              className="custom-card"
              onClick={() => openPopup(item)}
              style={{ cursor: 'pointer' }}
            >
              <h3>{item.title}</h3>
              <p>{item.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline - Right */}
      <div className="half-section">
        <h2 className="section-heading">Timeline</h2>
        <div className="card-container">
          {timeline.map((item, index) => (
            <div key={index} className="custom-card">
              <h3>{item.title}</h3>
              <p className="timeline-date">{item.date}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selectedProblem && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h2 className="popup-title">{selectedProblem.title}</h2>
            <p className="popup-subtitle">{selectedProblem.shortDesc}</p>
            <ul className="popup-list">
              {selectedProblem.fullStatements.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default CombinedSection;
