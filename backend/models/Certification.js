const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  badgeIcon: { type: String },
  imageUrl: { type: String }, // To display in the modal viewer
  description: { type: String }, // Detailed string for modal
  fileName: { type: String },
  contentType: { type: String },
  data: { type: Buffer }
}, { timestamps: true });

module.exports = mongoose.model('Certification', certificationSchema);
