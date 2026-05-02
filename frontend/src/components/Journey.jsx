import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, X } from 'lucide-react';
import { fetchJourney } from '../services/api';

const Journey = () => {
  const [journeyElements, setJourneyElements] = useState([]);
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedMilestone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMilestone]);

  useEffect(() => {
    const getJourney = async () => {
      try {
        const { data } = await fetchJourney();
        if (data.length === 0) {
          setJourneyElements([
            {
              _id: '1',
              title: 'MERN Stack Intern @ Maskan Technologies',
              description: 'Developed and maintained full-stack web applications securely handling user data and complex state.',
              date: 'Sep 2025 - Dec 2025',
              achievements: [
                'Built 10+ REST APIs with Node/Express',
                'Integrated frontend React with MongoDB securely',
                'Implemented CRUD operations and basic database management',
                'Collaborated in a development environment using Git/GitHub'
              ],
              type: 'work'
            },
            {
              _id: '2',
              title: 'Full Stack Intern @ Eagle-Tech IT Solutions',
              description: '1-month Full Stack Development internship focusing on HTML, CSS, JavaScript, and Java Backend.',
              date: 'Nov 2023 - Dec 2023',
              achievements: [
                'Built responsive user interfaces',
                'Implemented server-side logic in Java',
                'Integrated frontend components with backend services',
                'Understood complete full-stack application flow'
              ],
              type: 'work'
            },
            {
              _id: '3',
              title: 'B.E in Computer Science and Engineering',
              description: 'Bachelor of Engineering in Computer Science. CGPA: 8.16',
              date: 'Nov 2022 - Apr 2025',
              achievements: ['Focus on core computer science foundations and programming.'],
              type: 'education'
            },
            {
              _id: '4',
              title: 'Diploma in Civil Engineering',
              description: 'Murugappa Polytechnic College. Percentage: 77.73%',
              date: 'Aug 2017 - May 2020',
              achievements: ['Focus on Civil Engineering foundations and practical implementations.'],
              type: 'education'
            },
            {
              _id: '5',
              title: 'SSLC',
              description: 'Nazareth Matriculation Higher Secondary School. Percentage: 90.4%',
              date: 'Jun 2016 - May 2017',
              achievements: ['Secondary School Leaving Certificate.'],
              type: 'education'
            }
          ]);
        } else {
          setJourneyElements(data);
        }
      } catch (err) {
        console.error('Error fetching journey:', err);
      } finally {
        setLoading(false);
      }
    };
    getJourney();
  }, []);

  return (
    <section id="journey" className="py-24 relative overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* Background abstract elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-neon-purple/5 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none" />
      
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,0,0.1)_2px,transparent_2px)] dark:bg-[radial-gradient(rgba(255,255,255,0.1)_2px,transparent_2px)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>

      {/* Background glow lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-neon-purple to-transparent opacity-20 hidden md:block z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-purple to-neon-blue">Journey</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-neon-purple to-neon-blue mx-auto rounded-full glow-border"></div>
        </motion.div>

        {loading ? (
          <div className="text-center text-neon-purple animate-pulse">Loading timeline data...</div>
        ) : (
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-0 w-1 bg-linear-to-b from-neon-purple via-neon-blue to-transparent transform md:-translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(0,243,255,0.4)] z-0"></div>
            
            <div className="space-y-16 md:space-y-24">
              {journeyElements.map((item, index) => (
                <div key={item._id} className="relative flex items-center justify-between md:justify-normal w-full group">
                  
                  {/* Marker Node */}
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-slate-900 border-[3px] border-neon-purple z-10 transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(189,0,255,0.5)] transition-all duration-700 group-hover:border-neon-blue group-hover:scale-125 top-0 md:top-1/2 md:-translate-y-1/2">
                    <motion.div 
                      className="w-3 h-3 rounded-full bg-neon-blue"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    {/* Connecting Line (Desktop) */}
                    <div className={`hidden md:block absolute top-1/2 w-16 h-[2px] bg-linear-to-r ${index % 2 === 0 ? 'right-full from-transparent to-neon-purple/50' : 'left-full from-neon-purple/50 to-transparent'} transform -translate-y-1/2 group-hover:to-neon-blue/80 transition-colors duration-500`}></div>
                  </div>

                  {/* Card wrapper */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16 md:mr-auto text-left md:text-right' : 'md:pl-16 md:ml-auto text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 30 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      onClick={() => setSelectedMilestone(item)}
                      className={`glass p-6 md:p-8 rounded-3xl cursor-pointer transition-all duration-500 relative overflow-hidden shadow-xl border border-white/20 dark:border-slate-800 ${index % 2 === 0 ? 'hover:border-neon-purple/50 hover:shadow-[0_0_30px_rgba(189,0,255,0.15)] bg-linear-to-bl from-white/5 to-transparent' : 'hover:border-neon-blue/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] bg-linear-to-br from-white/5 to-transparent'}`}
                    >
                      {/* Decorative ambient background inside card */}
                      <div className={`absolute -inset-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[80px] pointer-events-none ${index % 2 === 0 ? 'bg-neon-purple/10' : 'bg-neon-blue/10'}`}></div>

                      <div className="relative z-10">
                        <div className={`flex items-center gap-2 mb-4 text-neon-blue ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                          <Calendar className={`w-5 h-5 ${index % 2 === 0 ? 'text-neon-purple' : 'text-neon-blue'}`} />
                          <span className="text-sm font-bold tracking-widest uppercase">{item.date}</span>
                        </div>
                        <h3 className="text-2xl font-extrabold mb-3 text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed line-clamp-2 mb-6">{item.description}</p>
                        
                        <div className={`flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full ${index % 2 === 0 ? 'bg-neon-purple/10 text-neon-purple border border-neon-purple/20' : 'bg-neon-blue/10 text-neon-blue border border-neon-blue/20'}`}>
                          {item.type === 'education' ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                          {item.type}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMilestone && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMilestone(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>

            <motion.div
              className="relative w-full max-w-2xl z-10"
              initial={{ scale: 0.3, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.5, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            >
              {/* Floating Icon on Top Right border */}
              <div 
                className="absolute -top-6 -right-4 sm:-right-6 w-16 h-16 shrink-0 rounded-full flex items-center justify-center shadow-2xl z-30 border-4 border-white dark:border-slate-900"
                style={{
                  background: 'rgba(189, 0, 255, 0.9)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {selectedMilestone.type === 'education' ? <GraduationCap className="w-8 h-8 text-white dark:text-slate-900" /> : <Briefcase className="w-8 h-8 text-white dark:text-slate-900" />}
              </div>

              {/* Card Content Container */}
              <div className="w-full max-h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl glass border border-white/20 dark:border-slate-800 relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-neon-purple to-neon-blue shadow-[0_0_15px_rgba(189,0,255,0.8)] z-10"></div>
                
                {/* Background ambient glows inside modal */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-blue/10 rounded-full blur-[80px] pointer-events-none"></div>
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10">
                  <button 
                    onClick={() => setSelectedMilestone(null)}
                    className="absolute -top-2 -right-2 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20"
                  >
                    <X className="w-6 h-6 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white" />
                  </button>

                  <div className="flex flex-col items-center text-center pt-4">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-gray-100 uppercase tracking-widest shadow-sm mb-6">
                      {selectedMilestone.date}
                    </span>
                    
                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 dark:text-white">{selectedMilestone.title}</h3>
                    
                    <div className="w-full text-left bg-slate-50/50 dark:bg-slate-800/50 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 mb-8">
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                        {selectedMilestone.description}
                      </p>
                    </div>

                    {selectedMilestone.achievements && selectedMilestone.achievements.length > 0 && (
                      <div className="w-full text-left">
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">Key Achievements</h4>
                        <ul className="space-y-4">
                          {selectedMilestone.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-4 text-slate-700 dark:text-slate-200 text-base p-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-neon-purple transition-colors shadow-sm">
                              <div className="mt-1.5 w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_rgba(189,0,255,0.8)] shrink-0"></div>
                              <span className="leading-snug">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Journey;
