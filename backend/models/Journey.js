const mongoose = require('mongoose');

const journeySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  achievements: [{ type: String }],
  order: { type: Number, default: 0 } // For sorting on timeline
}, { timestamps: true });

module.exports = mongoose.model('Journey', journeySchema);
