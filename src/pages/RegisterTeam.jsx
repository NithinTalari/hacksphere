import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

export default function RegisterTeam() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="container" style={{ textAlign: 'center', padding: '2rem' }}>
      <h2>Register Your Team</h2>

      {/* Button to open the registration form */}
      <button
        onClick={() => setShowModal(true)}
        style={{
          marginTop: '1rem',
          padding: '0.75rem 1.5rem',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#007BFF')}
      >
        Register Now
      </button>

      {/* Modal */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowModal(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '10px',
              maxWidth: '500px',
              width: '90%',
              position: 'relative',
            }}
          >
            <button
              className="close-btn"
              onClick={() => setShowModal(false)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '1.5rem',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
            <RegistrationForm />
          </div>
        </div>
      )}
    </section>
  );
}
