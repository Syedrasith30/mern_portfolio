import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Server, Database, Smartphone, GitBranch, Terminal, X } from 'lucide-react';

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  useEffect(() => {
    if (selectedSkill) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedSkill]);

  const skillsData = [
    {
      id: 'frontend',
      title: 'Frontend',
      icon: Code2,
      color: 'text-neon-blue',
      bgHover: 'group-hover:bg-neon-blue/20',
      description: 'Crafted highly responsive and interactive user interfaces using modern React, HTML5, CSS3, and Tailwind CSS. Focused on delivering premium aesthetics, smooth micro-animations with Framer Motion, and accessible, mobile-first design patterns.'
    },
    {
      id: 'backend',
      title: 'Backend',
      icon: Server,
      color: 'text-neon-purple',
      bgHover: 'group-hover:bg-neon-purple/20',
      description: 'Built robust server-side logic and RESTful APIs using Node.js and Express. Implemented JWT-based authentication, protected routes, secure data handling, and optimized server architecture for scalability and performance.'
    },
    {
      id: 'database',
      title: 'Database',
      icon: Database,
      color: 'text-soft-cyan',
      bgHover: 'group-hover:bg-soft-cyan/20',
      description: 'Designed efficient database schemas using MongoDB and Mongoose. Handled complex queries, data aggregation, and relationship modeling to ensure data integrity and high-speed retrieval for MERN stack applications.'
    },
    {
      id: 'automation',
      title: 'Automation',
      icon: Terminal,
      color: 'text-neon-blue',
      bgHover: 'group-hover:bg-neon-blue/20',
      description: 'Automated repetitive development tasks and workflows using custom scripts, Node.js utilities, and task runners to streamline the build process and improve overall development efficiency.'
    },
    {
      id: 'devops',
      title: 'DevOps',
      icon: GitBranch,
      color: 'text-neon-purple',
      bgHover: 'group-hover:bg-neon-purple/20',
      description: 'Managed version control utilizing Git and GitHub. Configured CI/CD pipelines, managed cloud deployments, and integrated third-party services like Cloudinary to ensure reliable staging and production environments.'
    },
    {
      id: 'mobile',
      title: 'Mobile',
      icon: Smartphone,
      color: 'text-soft-cyan',
      bgHover: 'group-hover:bg-soft-cyan/20',
      description: 'Designed mobile-first web applications ensuring seamless experiences across all screen sizes. Specialized in responsive layouts, touch-friendly interfaces, and Progressive Web App (PWA) standards.'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-200 dark:bg-slate-950">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-soft-cyan/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />
      
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-soft-cyan">Me</span>
          </h2>
          <div className="h-1 w-20 bg-neon-blue mx-auto rounded-full glow-border"></div>
        </motion.div>

        <div className="glass p-8 md:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple to-neon-blue rounded-3xl transform rotate-6 opacity-50 blur-lg"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-3xl transform -rotate-3 overflow-hidden border border-white/20">
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" alt="Coding Setup" className="w-full h-full object-cover opacity-80 mix-blend-overlay" />
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl flex items-center gap-4">
                <div className="text-4xl font-bold text-neon-blue">10+</div>
                <div className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-tight">REST APIs<br/>Built</div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-7"
          >
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">
              Transforming Ideas into <span className="text-neon-purple">Digital Reality</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-lg">
              I am a motivated and hardworking individual eager to learn and improve. I aim to work in a creative and challenging environment where I can use my skills in HTML, CSS, JavaScript, React, Node.js, and MongoDB to grow both personally and professionally.
            </p>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              I believe in contributing to the success of the organization while continuously improving myself through clean coding, mentor collaboration, and building full-stack responsive applications.
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {skillsData.map((skill) => {
                const Icon = skill.icon;
                return (
                  <motion.div 
                    key={skill.id}
                    layoutId={`skill-container-${skill.id}`}
                    onClick={() => setSelectedSkill(skill)}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <motion.div 
                      layoutId={`skill-icon-bg-${skill.id}`}
                      className={`p-4 rounded-full glass ${skill.bgHover} transition-colors shadow-lg`}
                    >
                      <Icon className={`w-6 h-6 ${skill.color}`} />
                    </motion.div>
                    <motion.span 
                      layoutId={`skill-title-${skill.id}`}
                      className="text-xs font-medium text-slate-500 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors"
                    >
                      {skill.title}
                    </motion.span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bubble Pop-up Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            
            {/* Pop-up Bubble Card Wrapper */}
            <motion.div
              className="relative w-full max-w-sm sm:max-w-md z-10"
              initial={{ scale: 0.3, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              {/* Floating Icon on Top Right border */}
              <div 
                className="absolute -top-6 -right-4 sm:-right-6 w-16 h-16 shrink-0 rounded-full flex items-center justify-center shadow-2xl z-30 border-4 border-white dark:border-slate-900"
                style={{
                  background: selectedSkill.id === 'frontend' || selectedSkill.id === 'automation' 
                    ? 'rgba(0, 243, 255, 0.9)' 
                    : selectedSkill.id === 'backend' || selectedSkill.id === 'devops'
                    ? 'rgba(189, 0, 255, 0.9)'
                    : 'rgba(0, 255, 170, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <selectedSkill.icon className="w-8 h-8 text-white dark:text-slate-900" />
              </div>

              {/* Card Content Container */}
              <div className="w-full max-h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl glass border border-white/20 dark:border-slate-800 relative">
                
                <button 
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6 mt-2 pr-8">
                  {/* Title on Left */}
                  <h3 className={`text-2xl sm:text-3xl font-bold ${selectedSkill.color}`}>
                    {selectedSkill.title} :
                  </h3>
                </div>

                {/* Content Text */}
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg text-left">
                  {selectedSkill.description}
                </p>
                
                {/* Decorative bubbles inside the card */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-neon-purple/5 blur-2xl pointer-events-none"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-neon-blue/5 blur-2xl pointer-events-none"></div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
