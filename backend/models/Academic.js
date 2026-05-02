const mongoose = require('mongoose');

const academicSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  duration: { type: String, required: true },
  description: { type: String },
  grade: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Academic', academicSchema);
