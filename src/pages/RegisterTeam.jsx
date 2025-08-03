import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

export default function RegisterTeam() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="container">
      <h2>Register Your Team</h2>

      <p
        onClick={() => setShowModal(true)}
        style={{ cursor: 'pointer', display: 'inline-block' }}
        title="Click to open registration form"
      >
        Register Now
      </p>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              &times;
            </button>
            <RegistrationForm />
          </div>
        </div>
      )}
    </section>
  );
}
