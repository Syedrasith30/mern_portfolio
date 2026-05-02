const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Resume = require('./models/Resume');
require('dotenv').config();

const uploadRealResume = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio');
    console.log('Connected to DB');

    await Resume.deleteMany({});
    
    // Read the actual PDF file from backend/resume/resumes.pdf
    const resumePath = path.join(__dirname, 'resume', 'resumes.pdf');
    const resumeBuffer = fs.readFileSync(resumePath);

    const newResume = new Resume({
      fileName: 'Syed_Rasith_Resume.pdf',
      contentType: 'application/pdf',
      data: resumeBuffer
    });

    await newResume.save();
    console.log('Successfully uploaded your REAL resume to the database!');
    process.exit(0);
  } catch (err) {
    console.error('Failed to upload:', err);
    process.exit(1);
  }
};

uploadRealResume();
