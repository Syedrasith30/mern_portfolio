const express = require('express');
const router = express.Router();
const Skill = require('../models/Skill');
const Project = require('../models/Project');
const Journey = require('../models/Journey');
const Certification = require('../models/Certification');
const Academic = require('../models/Academic');
const Message = require('../models/Message');
const multer = require('multer');
const resumeController = require('../controllers/resumeController');

// Configure multer to store files in memory as Buffers
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});
// === SKILLS ===
router.get('/skills', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// === PROJECTS ===
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// === JOURNEY ===
router.get('/journey', async (req, res) => {
  try {
    const journey = await Journey.find().sort({ order: 1 });
    res.json(journey);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// === CERTIFICATIONS ===
router.get('/certifications', async (req, res) => {
  try {
    const certs = await Certification.find().select('-data').sort({ date: -1 });
    res.json(certs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to download a specific certification PDF
router.get('/certifications/:id/download', async (req, res) => {
  try {
    const cert = await Certification.findById(req.params.id);
    
    if (!cert || !cert.data) {
      return res.status(404).json({ message: 'Certification PDF not found' });
    }
    
    res.set('Content-Type', cert.contentType);
    res.set('Content-Disposition', `attachment; filename="${cert.fileName}"`);
    res.send(cert.data);
  } catch (error) {
    console.error('Error downloading certification:', error);
    res.status(500).json({ message: 'Server error downloading certification' });
  }
});

// === ACADEMICS ===
router.get('/academics', async (req, res) => {
  try {
    const academics = await Academic.find();
    res.json(academics);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// === CONTACT (POST) ===
router.post('/contact', async (req, res) => {
  try {
    const newMessage = new Message({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// === RESUME ===
// Route to upload a resume
router.post('/resume/upload', upload.single('resume'), resumeController.uploadResume);

// Route to download the resume
router.get('/resume/download', resumeController.getResume);

module.exports = router;
