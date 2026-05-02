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
const nodemailer = require('nodemailer');

// Email transporter setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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
    const { name, email, message } = req.body;

    // 1. Save message to MongoDB first (always)
    const newMessage = new Message({ name, email, message });
    const savedMessage = await newMessage.save();

    // 2. Send email notification (non-blocking — won't break form if it fails)
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `📬 New Message from ${name} | Portfolio`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 12px;">
          <h2 style="color: #00f3ff; margin-bottom: 4px;">New Portfolio Message</h2>
          <p style="color: #888; margin-top: 0;">Someone reached out through your portfolio contact form.</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <table style="width: 100%; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; width: 100px;">Name:</td>
              <td style="padding: 8px 0; color: #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #00f3ff;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
              <td style="padding: 8px 0; color: #222; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 16px;" />
          <p style="color: #aaa; font-size: 12px;">You can reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    };

    transporter.sendMail(mailOptions).catch((emailErr) => {
      console.error('Email sending failed (message still saved):', emailErr.message);
    });

    // Respond with success immediately after saving to DB
    res.status(201).json(savedMessage);
  } catch (err) {
    console.error('Contact error:', err);
    res.status(400).json({ message: err.message });
  }
});

// === RESUME ===
// Route to upload a resume
router.post('/resume/upload', upload.single('resume'), resumeController.uploadResume);

// Route to download the resume
router.get('/resume/download', resumeController.getResume);

module.exports = router;
