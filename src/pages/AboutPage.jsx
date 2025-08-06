// src/pages/AboutPage.jsx
import React from 'react';

export default function AboutPage() {
  return (
    <section className="container about-page">
      <h2>About HackSphere</h2>

      <div className="about-section">
        <h3>What is HackSphere?</h3>
        <p>
          HackSphere is a dynamic and inclusive hackathon platform designed to foster innovation and real-world problem-solving among students, developers, and tech enthusiasts. From ideation to submission, HackSphere simplifies the entire hackathon process with a user-friendly platform.
        </p>
      </div>

      <div className="about-section">
        <h3>Who Can Participate?</h3>
        <p>
          Whether you're a first-year student just starting out or an experienced developer with multiple projects under your belt, HackSphere is open to all. We welcome participants from all backgrounds, colleges, and countries to bring their creativity to the table.
        </p>
      </div>

      <div className="about-section">
        <h3>Event Format</h3>
        <p>
          The event will be conducted <strong>entirely online</strong>, allowing participants to join from anywhere. You can participate as an <strong>individual</strong> or as part of a <strong>team (up to 4 members)</strong>. Teams are encouraged to collaborate through virtual meetups and shared tools.
        </p>
      </div>

      <div className="about-section">
        <h3>Judging Criteria</h3>
        <ul>
          <li><strong>Innovation:</strong> Originality and uniqueness of the idea</li>
          <li><strong>Technical Implementation:</strong> How well the idea is built and executed</li>
          <li><strong>Impact:</strong> Usefulness and potential of the solution in the real world</li>
          <li><strong>Presentation:</strong> Clarity and completeness of submission (demo/video/readme)</li>
        </ul>
      </div>
    </section>
  );
}
