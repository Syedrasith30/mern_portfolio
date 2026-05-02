const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true, enum: ['Programming', 'Web Development', 'Automation Testing', 'Databases', 'Tools', 'Foundational Knowledge'] },
  icon: { type: String }, // e.g. class name or icon identifier
  description: { type: String },
  level: { type: String }, // e.g. Beginner, Intermediate, Advanced
  toolsUsed: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
