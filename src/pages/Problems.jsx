import React, { useEffect, useState } from 'react';
import problemsData from '../data/problems.json'; // Adjust the path if needed


const Problems = () => {
  const [openModal, setOpenModal] = useState(null);

  return (
    <section className="problem-section">
      <h2 className="problem-title">Problem Statements</h2>
      <p className="problem-intro">
        Explore a wide range of tech challenges across domains. Click on any card to view full details.
      </p>

      <div className="problem-cards">
        {problemsData.map((problem, index) => (
          <div
            key={index}
            className="problem-card"
            onClick={() => setOpenModal(index)}
          >
            <h3>{problem.title}</h3>
            <p>{problem.shortDesc}</p>
          </div>
        ))}
      </div>

      {openModal !== null && (
        <div className="modal-overlay" onClick={() => setOpenModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{problemsData[openModal].title}</h3>
            <ul>
              {problemsData[openModal].fullStatements.map((stmt, idx) => (
                <li key={idx}>{stmt}</li>
              ))}
            </ul>
            <button className="close-btn" onClick={() => setOpenModal(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Problems;
