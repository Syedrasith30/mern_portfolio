import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Code, Terminal, Layers, Database, Cpu, Pen } from 'lucide-react';
import { fetchSkills } from '../services/api';

const iconMap = {
  Languages: <Code className="w-8 h-8" />,
  'Web Technologies': <Layers className="w-8 h-8" />,
  'Backend Technologies': <Terminal className="w-8 h-8" />,
  Databases: <Database className="w-8 h-8" />,
  'Tools & Editors': <Pen className="w-8 h-8" />,
  'Foundational Knowledge': <Cpu className="w-8 h-8" />
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const getSkills = async () => {
      try {
        const { data } = await fetchSkills();
        if (data.length === 0) {
          // Fallback mock data if DB is empty
          setSkills([
            { _id: '1', name: 'JavaScript & Java', category: 'Languages', level: 'Intermediate', description: 'Core programming languages for frontend logic and backend architecture.', toolsUsed: ['ES6+', 'Java 8+'] },
            { _id: '2', name: 'HTML, CSS, React', category: 'Web Technologies', level: 'Advanced', description: 'Building responsive user interfaces with cross-browser compatibility.', toolsUsed: ['Tailwind CSS', 'Vite', 'React Router'] },
            { _id: '3', name: 'Node.js & Express', category: 'Backend Technologies', level: 'Intermediate', description: 'Implementing server-side logic and building REST APIs.', toolsUsed: ['Express.js', 'Nodemon', 'JWT'] },
            { _id: '4', name: 'MongoDB, MySQL, SQL', category: 'Databases', level: 'Intermediate', description: 'Database management, CRUD operations, and schema modeling.', toolsUsed: ['Mongoose', 'Atlas'] },
            { _id: '5', name: 'Git, Postman, VS Code', category: 'Tools & Editors', level: 'Advanced', description: 'Version control, API testing, and collaborative development tools.', toolsUsed: ['GitHub', 'Git CLI'] },
            { _id: '6', name: 'Python Basics', category: 'Languages', level: 'Beginner', description: 'Foundational Python programming including data types, control flow, functions, and introductory scripting.', toolsUsed: ['Python 3', 'pip', 'Jupyter Notebook'] },
          ]);
        } else {
          setSkills(data);
        }
      } catch (err) {
        console.error('Error fetching skills:', err);
      } finally {
        setLoading(false);
      }
    };
    getSkills();
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-100 dark:bg-slate-900">
      {/* Background abstract elements */}
      <div className="absolute top-1/4 right-0 w-120 h-120 bg-neon-blue/5 rounded-full mix-blend-screen filter blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-120 h-120 bg-neon-purple/5 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 pointer-events-none" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[80px_80px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-blue">Arsenal</span>
          </h2>
          <div className="h-1 w-20 bg-neon-purple mx-auto rounded-full glow-border"></div>
        </motion.div>

        {loading ? (
          <div className="text-center text-neon-blue animate-pulse">Loading protocols...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onClick={() => setSelectedSkill(skill)}
                className="glass p-8 rounded-3xl cursor-pointer group hover:border-neon-blue/50 transition-all duration-300 relative overflow-hidden shadow-lg border border-white/20 dark:border-slate-800"
              >
                {/* Decorative background glow on hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl group-hover:bg-neon-blue/20 transition-colors duration-500"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 w-16 h-16 rounded-2xl bg-white/50 dark:bg-slate-800 flex items-center justify-center text-neon-blue group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,243,255,0.1)] group-hover:shadow-[0_0_20px_rgba(0,243,255,0.3)] border border-white/40 dark:border-slate-700">
                    {iconMap[skill.category] || <Code className="w-8 h-8" />}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-neon-blue transition-colors">{skill.name}</h3>
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-sm text-neon-purple font-semibold uppercase tracking-wider">{skill.category}</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                      {skill.level}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative glass w-full max-w-2xl max-h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar rounded-3xl p-8 md:p-12 bg-white dark:bg-slate-900 border border-white/20 dark:border-slate-800 shadow-2xl shadow-neon-blue/10"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-neon-blue to-neon-purple"></div>
              
              <button 
                onClick={() => setSelectedSkill(null)}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20"
              >
                <X className="w-6 h-6 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" />
              </button>

              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 rounded-3xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-neon-blue mb-6 shadow-[0_0_30px_rgba(0,243,255,0.15)] border border-slate-200 dark:border-slate-700">
                   {iconMap[selectedSkill.category] || <Code className="w-12 h-12" />}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white">{selectedSkill.name}</h3>
                
                <div className="flex flex-wrap justify-center items-center gap-3 mb-8">
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-neon-purple/10 text-neon-purple border border-neon-purple/20">
                    {selectedSkill.category}
                  </span>
                  <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-neon-blue/10 text-neon-blue border border-neon-blue/20">
                    {selectedSkill.level}
                  </span>
                </div>

                <div className="w-full text-left bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 mb-8">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3 border-b border-slate-200 dark:border-slate-700 pb-2">Technical Overview</h4>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                    {selectedSkill.description || `${selectedSkill.name} is a core competency I have developed over the years, applying it in various production environments.`}
                  </p>
                </div>

                {selectedSkill.toolsUsed && selectedSkill.toolsUsed.length > 0 && (
                  <div className="w-full text-left">
                    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Related Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkill.toolsUsed.map((tool, idx) => (
                        <span key={idx} className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm text-sm font-medium rounded-xl text-slate-700 dark:text-slate-200 hover:border-neon-blue transition-colors">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Background ambient glows inside modal */}
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none"></div>
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] pointer-events-none"></div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
