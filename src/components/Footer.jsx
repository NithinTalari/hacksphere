import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2025 HackSphere. Reach out at <a href="mailto:team@hacksphere.com">team@hacksphere.com</a></p>
        <div className="social-icons">
          <a href="https://github.com/hacksphere" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src="gitHub.svg" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/company/hacksphere" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="linkedin.svg" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}
