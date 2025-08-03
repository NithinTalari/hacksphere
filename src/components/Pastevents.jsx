// ✅ PastEvents.jsx
import React from 'react';
import CardGrid from './CardGrid';


export default function PastEvents() {
  const eventsData = [
    {
      title: "HackSphere 2024",
      subtitle: "Theme: Smart Cities",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "CodeStorm 2023",
      subtitle: "Theme: FinTech Solutions",
      image: "https://via.placeholder.com/300x200"
    },
    {
      title: "TechSprint 2022",
      subtitle: "Theme: Healthcare Innovation",
      image: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <section className="past-events">
      <h2 className="section-title">Our Past Events</h2>
      <CardGrid items={eventsData} />
    </section>
  );
}
