import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ExternalLink, Calendar, Shield } from 'lucide-react';
import { fetchCertifications, API_URL } from '../services/api';

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [selectedCert, setSelectedCert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const certsRes = await fetchCertifications();
        
        if (certsRes.data.length === 0) {
          setCertifications([
            {
              _id: '1',
              title: 'Introduction to MongoDB for Students',
              issuer: 'MongoDB University',
              date: 'Recent',
              badgeIcon: 'Database',
              description: 'Demonstrated fundamental understanding of document databases, CRUD operations, indexing, and MongoDB Atlas. Gained practical experience in connecting Node.js applications and modeling data for performance.',
              imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000'
            },
            {
              _id: '2',
              title: 'AWS Beginners Certification',
              issuer: 'Edureka',
              date: 'Recent',
              badgeIcon: 'Cloud',
              description: 'Certified in foundational cloud computing concepts on Amazon Web Services. Covered core services including EC2, S3, IAM, and basic networking architectures. Acquired skills to securely deploy and manage basic infrastructure.',
              imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000'
            },
            {
              _id: '3',
              title: 'Foundations of Cybersecurity',
              issuer: 'Coursera',
              date: 'Recent',
              badgeIcon: 'Security',
              description: 'Explored core cybersecurity principles, threat landscapes, and defensive strategies. Learned about encryption, network security, and risk management fundamentals necessary to build secure web applications.',
              imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000'
            },
            {
              _id: '4',
              title: 'Foundations of User Experience (UX) Design',
              issuer: 'Coursera',
              date: 'Recent',
              badgeIcon: 'Design',
              description: 'Mastered user-centered design processes, wireframing, prototyping, and usability testing. Gained ability to empathize with users, define pain points, and design interfaces that prioritize accessibility and seamless experiences.',
              imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000'
            },
            {
              _id: '5',
              title: 'Java SE 11 Developer Certification',
              issuer: 'Oracle',
              date: 'Recent',
              badgeIcon: 'Code',
              description: 'Demonstrated deep understanding of Java programming, object-oriented concepts, data structures, and algorithms. Validated expertise in building robust, scalable Java applications.',
              imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000'
            }
          ]);
        } else {
          setCertifications(certsRes.data);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-200 dark:bg-slate-900">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-soft-cyan/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neon-blue/10 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 pointer-events-none" />

      {/* Cross Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-soft-cyan to-neon-blue">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-soft-cyan mx-auto rounded-full glow-border"></div>
        </motion.div>

        {loading ? (
          <div className="text-center text-soft-cyan animate-pulse">Verifying credentials...</div>
        ) : (
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <h3 className="text-2xl font-bold mb-8 text-slate-800 dark:text-white flex items-center gap-3 col-span-1 md:col-span-2 lg:col-span-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                <Award className="w-8 h-8 text-neon-blue drop-shadow-[0_0_8px_rgba(0,243,255,0.6)]" />
                Verified Credentials
              </h3>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert._id}
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 120 }}
                  onClick={() => setSelectedCert(cert)}
                  className="group relative rounded-3xl overflow-hidden glass cursor-pointer border border-white/20 dark:border-slate-800 hover:border-neon-blue/60 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(0,243,255,0.2)] bg-slate-50 dark:bg-slate-900/80 transform hover:-translate-y-2 h-96 flex flex-col"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-neon-blue/0 via-transparent to-soft-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"></div>
                  
                  {/* Certificate Image Banner */}
                  <div className="h-48 w-full overflow-hidden relative shrink-0">
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <img 
                      src={cert.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'} 
                      alt={cert.title} 
                      className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    />
                  </div>
                  
                  {/* Floating Icon badge */}
                  <div className="absolute top-40 right-6 z-20 w-16 h-16 rounded-2xl bg-linear-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-[0_0_20px_rgba(0,243,255,0.4)] border border-white/30 group-hover:shadow-[0_0_30px_rgba(189,0,255,0.6)] group-hover:-translate-y-2 transition-all duration-300">
                    <Shield className="w-8 h-8 text-white fill-white/20" />
                  </div>

                  {/* Info Section */}
                  <div className="p-6 md:p-8 flex flex-col grow relative z-10">
                    <h4 className="text-xl md:text-2xl font-extrabold text-slate-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-neon-blue group-hover:to-soft-cyan transition-all duration-300 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-base text-slate-600 dark:text-slate-400 font-medium mb-auto">{cert.issuer}</p>
                    
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-bold uppercase tracking-widest bg-slate-200/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </div>
                      <span className="text-neon-blue text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1">
                        View Credential <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Certificate Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto overflow-x-hidden custom-scrollbar glass bg-slate-50 dark:bg-slate-900 rounded-3xl z-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/20 dark:border-slate-800 p-0"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-neon-blue to-soft-cyan z-50"></div>
              
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all hover:scale-110 border border-white/10"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full relative bg-slate-100 dark:bg-slate-950">
                {/* Stunning Top Image Area */}
                <div className="w-full h-72 md:h-96 relative overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                  <img 
                    src={selectedCert.imageUrl || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c'} 
                    alt={selectedCert.title} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay text in image */}
                  <div className="absolute bottom-8 left-8 md:left-12 z-20 pr-8">
                    <span className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-bold uppercase tracking-wider bg-neon-blue/20 text-soft-cyan border border-neon-blue/30 backdrop-blur-md">
                      Official Document
                    </span>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-lg leading-tight">{selectedCert.title}</h3>
                    <p className="text-xl text-slate-300 font-medium drop-shadow-md">{selectedCert.issuer}</p>
                  </div>
                </div>
                
                {/* Content Area */}
                <div className="p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-neon-blue/5 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                    <div className="md:col-span-2 space-y-8">
                      <section className="bg-white/50 dark:bg-slate-800/40 rounded-3xl p-8 border border-slate-200 dark:border-slate-700/50 shadow-inner">
                        <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-slate-200 dark:border-slate-700 pb-3 flex items-center gap-2">
                          <Award className="w-4 h-4 text-neon-blue" />
                          Certification Details
                        </h4>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                          {selectedCert.description || "Detailed description for this certification is being verified."}
                        </p>
                      </section>
                    </div>

                    <div className="space-y-6">
                      <section className="bg-slate-900 dark:bg-black/40 rounded-3xl p-8 border border-slate-800 shadow-xl">
                        <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Metadata</h4>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Issue Date</p>
                            <p className="text-slate-200 font-semibold text-lg flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-neon-blue" /> {selectedCert.date}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Status</p>
                            <p className="text-soft-cyan font-semibold text-lg flex items-center gap-2">
                              <Shield className="w-4 h-4" /> Verified Active
                            </p>
                          </div>
                        </div>

                        {selectedCert.fileName ? (
                          <div className="mt-8 pt-6 border-t border-slate-700/50">
                            <a href={`${API_URL}/certifications/${selectedCert._id}/download`} target="_blank" rel="noreferrer" className="flex w-full justify-center items-center gap-2 text-slate-900 dark:text-slate-900 hover:text-white transition-all text-sm font-bold bg-neon-blue hover:bg-neon-purple px-5 py-3 rounded-xl shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_20px_rgba(189,0,255,0.5)] cursor-pointer">
                              Download Certificate <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        ) : (
                          <div className="mt-8 pt-6 border-t border-slate-700/50">
                            <button disabled className="flex w-full justify-center items-center gap-2 text-slate-500 transition-all text-sm font-bold bg-slate-800 px-5 py-3 rounded-xl cursor-not-allowed">
                              Certificate Unavailable <Shield className="w-4 h-4" />
                            </button>
                          </div>
                        )}
                      </section>
                    </div>
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

export default Certifications;
