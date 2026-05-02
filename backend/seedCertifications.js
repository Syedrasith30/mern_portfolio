const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Certification = require('./models/Certification');
require('dotenv').config();

const seedCertifications = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portfolio');
    console.log('Connected to DB');

    await Certification.deleteMany({});
    console.log('Cleared existing certifications');

    const certsDir = path.join(__dirname, 'certifications');

    // Helper function to safely read file
    const readFileIfExists = (fileName) => {
      const filePath = path.join(certsDir, fileName);
      if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath);
      }
      return null;
    };

    const certificationsData = [
      {
        title: 'Introduction to MongoDB for Students',
        issuer: 'MongoDB University',
        date: 'Recent',
        badgeIcon: 'Database',
        description: 'Demonstrated fundamental understanding of document databases, CRUD operations, indexing, and MongoDB Atlas. Gained practical experience in connecting Node.js applications and modeling data for performance.',
        imageUrl: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000',
        fileName: 'MongoDB certi.pdf'
      },
      {
        title: 'AWS Beginners Certification',
        issuer: 'Edureka',
        date: 'Recent',
        badgeIcon: 'Cloud',
        description: 'Certified in foundational cloud computing concepts on Amazon Web Services. Covered core services including EC2, S3, IAM, and basic networking architectures. Acquired skills to securely deploy and manage basic infrastructure.',
        imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
        fileName: 'AWS_certi.pdf'
      },
      {
        title: 'Foundations of Cybersecurity',
        issuer: 'Coursera',
        date: 'Recent',
        badgeIcon: 'Security',
        description: 'Explored core cybersecurity principles, threat landscapes, and defensive strategies. Learned about encryption, network security, and risk management fundamentals necessary to build secure web applications.',
        imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000',
        fileName: 'Foundation of cyber Security.pdf'
      },
      {
        title: 'Foundations of User Experience (UX) Design',
        issuer: 'Coursera',
        date: 'Recent',
        badgeIcon: 'Design',
        description: 'Mastered user-centered design processes, wireframing, prototyping, and usability testing. Gained ability to empathize with users, define pain points, and design interfaces that prioritize accessibility and seamless experiences.',
        imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000',
        fileName: 'UXUI.pdf'
      },
      {
        title: 'Java SE 11 Developer Certification',
        issuer: 'Oracle',
        date: 'Recent',
        badgeIcon: 'Code',
        description: 'Demonstrated deep understanding of Java programming, object-oriented concepts, data structures, and algorithms. Validated expertise in building robust, scalable Java applications.',
        imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000'
      }
    ];

    for (const cert of certificationsData) {
      let dataBuffer = null;
      if (cert.fileName) {
        dataBuffer = readFileIfExists(cert.fileName);
      }

      const newCert = new Certification({
        ...cert,
        ...(dataBuffer && { 
          data: dataBuffer,
          contentType: 'application/pdf'
        })
      });

      await newCert.save();
    }

    console.log('Successfully seeded certifications!');
    process.exit(0);
  } catch (err) {
    console.error('Failed to seed:', err);
    process.exit(1);
  }
};

seedCertifications();
