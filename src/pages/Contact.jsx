import React from 'react';

export default function Contact() {
  return (
    <section className="container contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-details">
        <div className="contact-item">
          <h4>Email</h4>
          <p><a href="mailto:team@hacksphere.com">team@hacksphere.com</a></p>
        </div>

        <div className="contact-item">
          <h4>Phone</h4>
          <p><a href="tel:+919999999999">+91 99999 99999</a></p>
        </div>

        <div className="contact-item">
          <h4>LinkedIn</h4>
          <p>
            <a
              href="https://www.linkedin.com/in/hacksphere-team"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/hacksphere-team
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h4>GitHub</h4>
          <p>
            <a
              href="https://github.com/hacksphere-org"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/hacksphere-org
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
