// src/pages/FAQs.jsx
import React, { useState } from 'react';


const faqData = [
  {
    question: "What is HackSphere?",
    answer: "HackSphere is a national-level hackathon where innovators solve real-world problems."
  },
  {
    question: "Who can participate?",
    answer: "Anyone with a passion for tech and innovation – students, developers, or entrepreneurs."
  },
  {
    question: "Is there any registration fee?",
    answer: "No, registration is completely free!"
  },
  {
    question: "Can I participate solo?",
    answer: "Yes, but we recommend forming a team of 2-4 people for the best experience."
  }
];

export default function FAQs() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="container faqs">
      <h2>Frequently Asked Questions</h2>
      <button className="faq-btn" onClick={() => setShowModal(true)}>View FAQs</button>

      {showModal && (
        <div className="faq-modal">
          <div className="faq-modal-content">
            <span className="faq-close" onClick={() => setShowModal(false)}>&times;</span>
            <h3>FAQs</h3>
            <ul>
              {faqData.map((faq, index) => (
                <li key={index} className="faq-item">
                  <strong>Q: {faq.question}</strong>
                  <p>A: {faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
