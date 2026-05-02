const Resume = require('../models/Resume');

// Upload or update the resume
exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // We only keep one resume in the database, so we can delete the old one
    await Resume.deleteMany({});

    const newResume = new Resume({
      fileName: req.file.originalname,
      contentType: req.file.mimetype,
      data: req.file.buffer
    });

    await newResume.save();

    res.status(200).json({ message: 'Resume uploaded successfully' });
  } catch (error) {
    console.error('Error uploading resume:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Download the resume
exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne().sort({ uploadDate: -1 });

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    res.set('Content-Type', resume.contentType);
    res.set('Content-Disposition', `attachment; filename="${resume.fileName}"`);
    res.send(resume.data);
  } catch (error) {
    console.error('Error fetching resume:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
