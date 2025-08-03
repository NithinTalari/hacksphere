// src/App.js
import React, { useEffect } from 'react';
import './styles/global.css';
import 'aos/dist/aos.css';
import './styles/CombinedPastMentors.css';
import AOS from 'aos';

// Layout components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ParticlesBackground from './components/ParticlesBackground';
import Footer from './components/Footer';


// Page sections
import About from './pages/AboutPage';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import Submit from './pages/SubmitProject';
import RegisterTeam from './pages/RegisterTeam';
import CombinedSection from './pages/CombinedSection';
import CombinedPastMentors from './pages/CombinedPastMentors'; 

// JSON data
import problems from './data/problems.json';
import mentors from './data/mentors.json';
import timeline from './data/timeline.json';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <ParticlesBackground />
      <Hero />
      <CombinedSection />
      <CombinedPastMentors />
      <About />
      <FAQs />
      <Contact />
      <Submit />
      <RegisterTeam />
      <Footer />
    </div>
  );
}

export default App;
