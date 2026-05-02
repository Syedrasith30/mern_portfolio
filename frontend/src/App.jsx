import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-neon-blue selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Certifications />
        <Contact />
      </main>
      <footer className="py-8 text-center text-slate-500 border-t border-slate-200 dark:border-slate-800">
        <p>© {new Date().getFullYear()} Syed Rasith A.M. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
