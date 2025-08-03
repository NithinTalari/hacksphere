// src/pages/Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problems from '../components/Problems';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <Timeline />
      <Footer />
    </>
  );
}
