const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    required: true
  }],
  image: {
    type: String,
    required: true
  },
  githubUrl: {
    type: String,
    required: true
  },
  liveUrl: {
    type: String
  },
  category: {
    type: String,
    enum: ['Web Development', 'Mobile Development', 'Data Science', 'Machine Learning', 'Other'],
    default: 'Web Development'
  },
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema); 