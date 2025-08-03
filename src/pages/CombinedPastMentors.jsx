// src/pages/CombinedPastMentors.jsx
import React, { useState } from 'react';
import events from '../data/pastevents.json';
import mentors from '../data/mentors.json';
import '../styles/CombinedPastMentors.css'; // optional, for custom styles

const CombinedPastMentors = () => {
  const [popupData, setPopupData] = useState(null);
  const [popupType, setPopupType] = useState(""); // "event" or "mentor"

  const openPopup = (item, type) => {
    setPopupData(item);
    setPopupType(type);
  };

  const closePopup = () => {
    setPopupData(null);
    setPopupType("");
  };

  return (
    <section className="combined-section">
      {/* Left: Past Events */}
      <div className="half-section">
        <h2 className="section-heading">Past Events</h2>
        <div className="card-container">
          {events.map((item, index) => (
            <div key={index} className="custom-card" onClick={() => openPopup(item, "event")}>
              <img src={item.image} alt={item.title} className="card-image" />
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Mentors */}
      <div className="half-section">
        <h2 className="section-heading">Meet the Mentors</h2>
        <div className="card-container">
          {mentors.map((mentor, index) => (
            <div key={index} className="custom-card" onClick={() => openPopup(mentor, "mentor")}>
              <h3>{mentor.name}</h3>
              <p>{mentor.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {popupData && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closePopup}>×</button>
            <h2 className="popup-title">{popupData.title || popupData.name}</h2>
            {popupType === "event" && (
              <>
                <img src={popupData.image} alt={popupData.title} className="popup-img" />
                <p>{popupData.subtitle}</p>
              </>
            )}
            {popupType === "mentor" && (
              <>
                <p><strong>Expertise:</strong> {popupData.expertise}</p>
                {popupData.bio && <p>{popupData.bio}</p>}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default CombinedPastMentors;
