// src/pages/SubmitProject.jsx
import React, { useState } from 'react';

export default function SubmitProject() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    github: '',
    video: '',
    description: '',
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Project submitted (UI only)');
    setShowModal(false);
  };

  return (
    <section className="container submit-project">
      <h2>Submit Your Project</h2>
      <p>Click the button below to submit your hackathon project.</p>
      <button className="submit-btn" onClick={() => setShowModal(true)}>
        Submit Your Project
      </button>

      {showModal && (
        <div className="submit-modal">
          <div className="submit-modal-content">
            <span className="submit-close" onClick={() => setShowModal(false)}>&times;</span>
            <h3>Project Submission Form</h3>
            <form onSubmit={handleSubmit} className="submit-form">
              <input
                type="text"
                name="title"
                placeholder="Project Title"
                value={formData.title}
                onChange={handleChange}
                required
              />
              <input
                type="url"
                name="github"
                placeholder="GitHub Repository Link"
                value={formData.github}
                onChange={handleChange}
                required
              />
              <input
                type="url"
                name="video"
                placeholder="Video Demo Link (YouTube, etc.)"
                value={formData.video}
                onChange={handleChange}
              />
              <textarea
                name="description"
                placeholder="Brief Description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
              <input
                type="file"
                name="file"
                onChange={handleChange}
              />
              <div className="submit-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
