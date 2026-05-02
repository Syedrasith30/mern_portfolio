import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, FileText, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/profile.jpg';
import { API_URL } from '../services/api';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-2000">
      {/* Hyper-realistic Background Ambient Lights */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-blue/20 rounded-full mix-blend-screen filter blur-[150px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-neon-purple/20 rounded-full mix-blend-screen filter blur-[180px] animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-soft-cyan/10 rounded-full mix-blend-screen filter blur-[200px] animate-blob animation-delay-2000" />
      </div>

      {/* Cybernetic Grid Floor */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-size-[50px_50px] transform-[perspective(1000px)_rotateX(60deg)_translateY(100px)_scale(2)] mask-[linear-gradient(to_top,black,transparent)] z-0 pointer-events-none opacity-50 dark:opacity-100"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8 min-h-[80vh]">
        {/* Left Side: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -100, rotateY: 20 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 50 }}
          className="flex-1 text-center lg:text-left pt-10 lg:pt-0"
        >
          {/* Mobile Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.5 }}
            className="lg:hidden w-48 h-48 mx-auto mb-10 relative"
          >
            <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-neon-blue animate-[spin_4s_linear_infinite]"></div>
            <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-neon-purple animate-[spin_3s_linear_infinite_reverse]"></div>
            <div className="absolute inset-4 rounded-full overflow-hidden bg-slate-900 shadow-[0_0_30px_rgba(0,243,255,0.5)]">
              <img src={profilePic} alt="Syed Rasith" className="w-full h-full object-cover transform scale-110" />
            </div>
          </motion.div>

          {/* Futuristic Name Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-md border border-white/10 mb-6 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
          >
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
            <span className="text-sm font-semibold tracking-widest text-slate-300 uppercase">System Active //</span>
            <span className="text-sm font-bold text-neon-blue">Developer ID: SR-01</span>
          </motion.div>

          {/* Glitch/Neon Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter mb-4 relative z-10 transition-colors duration-300">
            <span className="block drop-shadow-xl text-slate-900 dark:text-slate-100">SYED</span>
            
            {/* Light Mode Name */}
            <span className="block dark:hidden text-slate-900 drop-shadow-md">
              RASITH A.M
            </span>
            
            {/* Dark Mode Gradient Name */}
            <span className="hidden dark:block text-transparent bg-clip-text bg-linear-to-r from-neon-blue via-soft-cyan to-neon-purple drop-shadow-[0_0_30px_rgba(0,243,255,0.8)] filter brightness-125">
              RASITH A.M
            </span>
          </h1>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
            Architecting <span className="font-bold text-neon-blue">Hyper-Scale</span> Web Experiences. <br className="hidden sm:block" />
            <span className="text-slate-500 dark:text-slate-400">Full Stack & MERN Specialist.</span>
          </h3>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start mt-10">
            <motion.a 
              href="#projects" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full bg-black dark:bg-white text-white dark:text-black font-bold text-lg flex items-center gap-3 overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Deploy Mission <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a 
              href={`${API_URL}/resume/download`}
              download="Syed_Rasith_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full glass border border-slate-300 dark:border-white/20 text-slate-800 dark:text-white font-bold text-lg flex items-center gap-3 hover:bg-slate-200 dark:hover:bg-white/10 transition-all shadow-lg"
            >
              <FileText className="w-5 h-5 text-neon-blue" />
              Access Resume
            </motion.a>
          </div>

          {/* Social Links Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-6 mt-12"
          >
            {[
              { icon: <Github className="w-6 h-6" />, href: "https://github.com", color: "hover:text-white" },
              { icon: <Linkedin className="w-6 h-6" />, href: "https://linkedin.com", color: "hover:text-neon-blue" },
              { icon: <Mail className="w-6 h-6" />, href: "mailto:hello@example.com", color: "hover:text-neon-purple" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className={`p-3 rounded-full glass border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 transition-all hover:scale-110 hover:-translate-y-1 ${social.color} hover:bg-slate-800 hover:border-transparent shadow-md`}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Ultra-Realistic Hologram Profile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring", stiffness: 40 }}
          className="hidden lg:flex flex-1 justify-center lg:justify-end relative"
        >
          <div className="relative w-[500px] h-[600px] flex items-center justify-center">
            
            {/* Holographic Projection Base */}
            <div className="absolute bottom-0 w-64 h-16 bg-neon-blue/20 rounded-full mix-blend-screen filter blur-[20px] shadow-[0_0_50px_rgba(0,243,255,0.8)]"></div>
            <div className="absolute bottom-4 w-48 h-2 bg-white rounded-full mix-blend-overlay filter blur-[2px] shadow-[0_0_20px_#fff]"></div>

            {/* Orbiting Tech Rings */}
            <div className="absolute inset-x-0 bottom-32 -rotate-12 transform-3d">
              <motion.div animate={{ rotateY: 360, rotateX: 20 }} transition={{ repeat: Infinity, duration: 15, ease: "linear" }} className="absolute inset-0 w-full h-[300px] rounded-full border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                  <div className="absolute top-0 left-1/2 w-4 h-4 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff]"></div>
              </motion.div>
              <motion.div animate={{ rotateY: -360, rotateX: -20 }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="absolute inset-0 w-full h-[400px] -top-12 -left-12 rounded-full border border-neon-purple/30 shadow-[0_0_15px_rgba(189,0,255,0.2)] scale-110">
                 <div className="absolute bottom-0 right-1/2 w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_10px_#bd00ff]"></div>
              </motion.div>
            </div>

            {/* Main Image Container */}
            <motion.div 
              animate={{ y: [-15, 15, -15] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-[340px] h-[460px] rounded-4xl overflow-hidden border-2 border-white/10 glass shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10"
            >
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-neon-blue/20 opacity-60 z-10 mix-blend-overlay"></div>
              
              {/* Scanline effect */}
              <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px] z-20 opacity-30 pointer-events-none"></div>
              
              <img 
                src={profilePic}
                alt="Syed Rasith" 
                className="w-full h-full object-cover filter contrast-125 saturate-110 brightness-90 relative z-0" 
              />
              
              {/* Internal HUD Elements */}
              <div className="absolute top-6 left-6 z-30">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <div key={i} className={`w-1.5 h-6 ${i<4 ? 'bg-neon-blue' : 'bg-slate-700'}`}></div>)}
                </div>
                <p className="text-[10px] text-neon-blue font-mono font-bold tracking-widest uppercase">MERN // 100%</p>
              </div>

              <div className="absolute bottom-6 right-6 z-30 text-right">
                <p className="text-sm text-white font-mono font-bold leading-none">SYS.OPT</p>
                <p className="text-3xl text-neon-purple font-black leading-tight drop-shadow-[0_0_10px_#bd00ff]">99.9</p>
              </div>
            </motion.div>

            {/* Floating UI Cards */}
            <motion.div 
              animate={{ y: [0, -20, 0], x: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5, delay: 1 }} 
              className="absolute top-20 -left-16 glass px-5 py-4 rounded-2xl border border-white/20 shadow-2xl z-20 backdrop-blur-xl"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">Expertise</p>
              <p className="text-lg font-black text-slate-900 dark:text-white">Full Stack Dev</p>
              <div className="h-1 w-full bg-slate-800 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-neon-blue w-[95%] shadow-[0_0_10px_#00f3ff]"></div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 6, delay: 2 }} 
              className="absolute bottom-32 -right-12 glass px-5 py-4 rounded-2xl border border-white/20 shadow-2xl z-20 backdrop-blur-xl"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider mb-1">Current Focus</p>
              <p className="text-lg font-black text-transparent bg-clip-text bg-linear-to-r from-slate-800 to-neon-blue dark:from-neon-blue dark:to-soft-cyan">Cloud Architecture</p>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Futuristic Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <div className="w-px h-16 bg-linear-to-b from-transparent via-neon-blue to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-transparent to-white shadow-[0_0_10px_#fff]"
          />
        </div>
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Initiate Scroll</span>
      </motion.div>
    </section>
  );
};


export default Hero;
