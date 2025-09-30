import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <div className="font-inter">
      <Navigation />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;