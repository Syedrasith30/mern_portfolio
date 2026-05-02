import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, FolderOpen } from 'lucide-react';
import { fetchProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await fetchProjects();
        if (data.length === 0) {
          setProjects([
            {
              _id: '1',
              title: 'Hospital Management System',
              description: 'Developed a Hospital Management System using MongoDB, Express.js, React.js, Node.js with 3 role-based modules (Admin, Doctor, Patient), including appointment booking and user management. Implemented key features such as dashboards, session logs, reports, search functionality, and efficient management of profiles, appointments, medical records, and system activities.',
              image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000',
              features: ['Role-based Modules', 'Appointment Booking', 'User Management', 'Dashboards & Reports'],
              githubLink: 'https://github.com/Syedrasith30/HMS',
              liveDemoLink: '#',
              techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
              context: 'Final Year Project'
            },
            {
              _id: '2',
              title: 'NullTube - Video Streaming App',
              description: 'Developed a full-stack video streaming application using React (Vite), Tailwind CSS, Node.js, Express, and MongoDB with complete API integration. Implemented JWT authentication, protected routes, and core video features (upload, publish/unpublish, likes, comments) using Multer and Cloudinary.',
              image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000',
              features: ['Video Upload & Streaming', 'JWT Authentication', 'Likes & Comments', 'Cloudinary Integration'],
              githubLink: 'https://github.com/Syedrasith30/Null_Tube',
              liveDemoLink: '#',
              techStack: ['MERN', 'Tailwind CSS', 'JWT', 'Multer'],
              context: 'MERN Stack Intern @ Maskan Technologies'
            },
            {
              _id: '3',
              title: 'Modern Furniture Store',
              description: 'A responsive and elegant e-commerce platform for a modern furniture brand. Features a clean, minimalist UI with dynamic product filtering, cart management, and a seamless checkout process.',
              image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000',
              features: ['Product Filtering', 'Shopping Cart', 'Responsive UI', 'Modern Aesthetics'],
              githubLink: '#',
              liveDemoLink: '#',
              techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js'],
              context: 'Full Stack Intern @ Eagle-Tech'
            },
            {
              _id: '4',
              title: 'Samsung Phone Themes UI/UX',
              description: 'A comprehensive UI/UX design project conceptualizing new, futuristic themes for Samsung mobile devices. Focused on glassmorphic elements, intuitive icon sets, and smooth micro-animations.',
              image: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000',
              features: ['Glassmorphism Design', 'Custom Iconography', 'Interactive Prototypes', 'Responsive Layouts'],
              githubLink: '#',
              liveDemoLink: '#',
              techStack: ['Figma', 'Adobe XD', 'Prototyping', 'UI/UX Principles'],
              context: 'Personal Interest / Self Learning'
            }
          ]);
        } else {
          // Add fallback contexts if API data doesn't have them
          const enhancedData = data.map(p => ({
            ...p,
            context: p.context || (p.title.includes('Hospital') ? 'Final Year Project' : 
                                  p.title.includes('NullTube') ? 'MERN Stack Intern @ Maskan Technologies' : 
                                  p.title.includes('Furniture') ? 'Full Stack Intern @ Eagle-Tech' : 
                                  p.title.includes('Samsung') ? 'Personal Interest / Self Learning' : 'Project Showcase')
          }));
          setProjects(enhancedData);
        }
      } catch (err) {
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-200 dark:bg-slate-900">
      {/* Background abstract elements */}
      <div className="absolute top-1/4 left-0 w-120 h-120 bg-neon-blue/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-120 h-120 bg-neon-purple/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 pointer-events-none" />
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[80px_80px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple">Mission</span> Archives
          </h2>
          <div className="h-1 w-24 bg-linear-to-r from-neon-blue to-neon-purple mx-auto rounded-full glow-border"></div>
        </motion.div>

        {loading ? (
          <div className="text-center text-neon-blue animate-pulse">Accessing archives...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -15, scale: 1.03 }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-3xl overflow-hidden glass cursor-pointer border border-white/20 dark:border-slate-800 hover:border-neon-blue/50 transition-all duration-500 transform perspective-1000 shadow-xl hover:shadow-[0_20px_40px_rgba(0,243,255,0.15)] flex flex-col h-full bg-slate-50 dark:bg-slate-900/80"
              >
                {/* Decorative border glow */}
                <div className="absolute inset-0 bg-linear-to-br from-neon-blue/0 via-neon-purple/0 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Project Image Container */}
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <img 
                    src={project.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                  />
                  
                  {/* Context Badge overlaying image */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-neon-blue border border-neon-blue/30 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                      {project.context}
                    </span>
                  </div>

                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/40 p-4 rounded-full backdrop-blur-md border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-[0_0_20px_rgba(0,243,255,0.4)]">
                      <FolderOpen className="w-8 h-8 text-neon-blue drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 relative z-10 flex flex-col grow">
                  <h3 className="text-2xl font-extrabold mb-3 text-slate-800 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech stack badges */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack?.slice(0, 4).map((tech, i) => (
                        <span key={i} className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-300/50 dark:border-slate-700 group-hover:border-neon-blue/30 transition-colors">
                          {tech}
                        </span>
                      ))}
                      {project.techStack?.length > 4 && (
                        <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-200/50 dark:bg-slate-800/80 text-neon-blue border border-slate-300/50 dark:border-slate-700">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Full Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar glass bg-white dark:bg-slate-900 rounded-3xl z-10 shadow-2xl shadow-neon-blue/20 border border-white/20 dark:border-slate-800"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-neon-blue to-neon-purple shadow-[0_0_15px_rgba(0,243,255,0.8)] z-50"></div>

              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-50 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all hover:scale-110 border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="w-full h-72 md:h-96 relative">
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/60 to-transparent z-10"></div>
                <img 
                  src={selectedProject.image || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover" 
                />
                
                {/* Context badge in modal */}
                <div className="absolute top-8 left-8 md:left-12 z-20">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest bg-black/60 backdrop-blur-md text-neon-blue border border-neon-blue/30 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
                    Timeline: {selectedProject.context}
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 md:left-12 z-20 max-w-3xl">
                  <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={selectedProject.githubLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-slate-900 border border-white/20 transition-all font-bold backdrop-blur-sm text-sm"
                    >
                      <Github className="w-5 h-5" /> View Source Code
                    </a>
                    {selectedProject.liveDemoLink && selectedProject.liveDemoLink !== '#' && (
                      <a 
                        href={selectedProject.liveDemoLink} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neon-blue text-slate-900 hover:bg-neon-purple hover:text-white shadow-[0_0_15px_rgba(0,243,255,0.4)] hover:shadow-[0_0_20px_rgba(189,0,255,0.6)] transition-all font-bold text-sm"
                      >
                        <ExternalLink className="w-5 h-5" /> Launch Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 relative overflow-hidden">
                {/* Decorative background blurs inside modal content */}
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                  <div className="md:col-span-2 space-y-8">
                    <section className="bg-slate-50/50 dark:bg-slate-800/40 rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 shadow-inner">
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-200 dark:border-slate-700 pb-3 flex items-center gap-2">
                        <FolderOpen className="w-4 h-4 text-neon-blue" />
                        Project Overview
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                        {selectedProject.description}
                      </p>
                    </section>

                    <section>
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Key Features Developed</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {selectedProject.features?.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:border-neon-purple/50 transition-colors">
                            <div className="mt-1 w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_rgba(189,0,255,0.8)] shrink-0"></div>
                            <span className="text-slate-700 dark:text-slate-200 font-medium leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="space-y-8">
                    <section className="bg-slate-900 dark:bg-black/40 rounded-3xl p-8 border border-slate-800 shadow-xl">
                      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Technologies Utilized</h4>
                      <div className="flex flex-col gap-3">
                        {selectedProject.techStack?.map((tech, idx) => (
                          <div key={idx} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 group hover:border-neon-blue/50 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-neon-blue group-hover:shadow-[0_0_8px_rgba(0,243,255,0.8)]"></div>
                            <span className="font-semibold tracking-wide">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </section>
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

export default Projects;
