const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  bio: {
    type: String,
    required: true
  },
  shortBio: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  avatar: {
    type: String,
    required: true
  },
  resume: {
    type: String
  },
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
    instagram: String
  },
  education: [{
    degree: String,
    institution: String,
    year: String,
    description: String
  }],
  experience: [{
    position: String,
    company: String,
    duration: String,
    description: String
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('About', aboutSchema); 