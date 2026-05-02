import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, MapPin, Phone, CircleCheck } from 'lucide-react';
import { submitContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', msg: '' });

    try {
      await submitContact(formData);
      setStatus({ type: 'success', msg: 'Message securely transmitted. I will respond shortly.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      setStatus({ type: 'error', msg: 'Transmission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* Background abstract elements */}
      <div className="absolute top-1/2 left-1/4 w-120 h-120 bg-neon-blue/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-120 h-120 bg-neon-purple/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 pointer-events-none" />

      {/* Large Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-neon-purple">Connection</span>
          </h2>
          <div className="h-1 w-20 bg-linear-to-r from-neon-blue to-neon-purple mx-auto rounded-full glow-border"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Let's build something exceptional</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed text-lg">
              Whether you have a quantum-level project in mind, need to optimize your current architecture, or just want to discuss the future of the web, my inbox is open.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-neon-blue/20 transition-colors">
                  <Mail className="w-6 h-6 text-neon-blue" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Email Protocol</p>
                  <p className="text-lg font-medium text-slate-800 dark:text-white">syedrasith1991@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-neon-purple/20 transition-colors">
                  <Phone className="w-6 h-6 text-neon-purple" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Voice Channel</p>
                  <p className="text-lg font-medium text-slate-800 dark:text-white">+91 8072175237</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full glass group-hover:bg-soft-cyan/20 transition-colors">
                  <MapPin className="w-6 h-6 text-soft-cyan" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Base Location</p>
                  <p className="text-lg font-medium text-slate-800 dark:text-white">Chennai, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 rounded-3xl relative"
          >
            {/* Success Overlay */}
            <AnimatePresence>
              {status.type === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20 glass bg-white/80 dark:bg-slate-900/90 rounded-3xl flex flex-col items-center justify-center p-6 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  >
                    <CircleCheck className="w-20 h-20 text-neon-blue mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Transmission Successful</h3>
                  <p className="text-slate-600 dark:text-slate-300">{status.msg}</p>
                  <button 
                    onClick={() => setStatus({ type: '', msg: '' })}
                    className="mt-6 px-6 py-2 rounded-full border border-neon-blue text-neon-blue font-medium hover:bg-neon-blue/10 transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {status.type === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-500 text-sm font-medium">
                  {status.msg}
                </div>
              )}
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">Identifier (Name)</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all text-slate-800 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">Return Channel (Email)</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all text-slate-800 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">Payload (Message)</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-black/20 border border-slate-200 dark:border-white/10 focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all text-slate-800 dark:text-white resize-none"
                  placeholder="Initiate communication protocol..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-white bg-linear-to-r from-neon-blue to-neon-purple hover:shadow-[0_0_20px_rgba(0,243,255,0.4)] transition-all transform hover:-translate-y-1 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Transmitting...' : 'Transmit Payload'}
                {!isSubmitting && <Send className="w-5 h-5 ml-1" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
