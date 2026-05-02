const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  features: [{ type: String }],
  githubLink: { type: String },
  liveDemoLink: { type: String },
  techStack: [{ type: String }], // Array of tech names
  context: { type: String } // e.g. "Final Year Project", "Hackathon", "Internship"
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
