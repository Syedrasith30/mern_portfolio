import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#journey' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-5 w-full z-50 transition-all duration-300 px-4 flex justify-center pointer-events-none"
    >
      <div 
        className={`w-full max-w-5xl px-6 lg:px-8 flex justify-between items-center transition-all duration-300 rounded-full py-3 pointer-events-auto ${
          scrolled ? 'glass shadow-lg shadow-black/10 dark:shadow-neon-blue/5' : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-md border border-slate-200 dark:border-slate-800'
        }`}
      >
        {/* Logo */}
        <a href="#hero" onClick={(e) => handleScrollTo(e, '#hero')} className="text-2xl font-bold tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple">
            Syed
          </span>
          <span className="text-slate-800 dark:text-white">.dev</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="relative group text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-neon-blue dark:hover:text-neon-blue transition-colors"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-neon-blue transition-all group-hover:w-full glow-border"></span>
            </a>
          ))}
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
            ) : (
              <Moon className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/10 dark:hover:bg-white/10">
            {theme === 'dark' ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 dark:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full glass mt-2 p-4 flex flex-col gap-4 rounded-b-2xl pointer-events-auto"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-lg font-medium text-center py-2 text-slate-800 dark:text-slate-200 hover:text-neon-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
