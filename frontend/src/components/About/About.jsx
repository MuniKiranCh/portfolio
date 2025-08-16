import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [aboutData] = useState({
    name: 'Ch Muni Kiran',
    title: 'Full Stack Developer',
    bio: 'I am a passionate and dedicated Full Stack Developer with a strong foundation in modern web technologies. I love creating innovative solutions and bringing ideas to life through code.',
    shortBio: 'Passionate Full Stack Developer creating innovative web solutions.',
    email: 'munikiranch@gmail.com',
    phone: '+91 9121716854',
    location: 'Sullurpeta, India',
    resume: 'https://drive.google.com/file/d/1Alx14ghUbMX2amner_NBZigCq9akmyu9/view?usp=sharing',
    education: [
      {
        degree: 'Bachelor of Technology in Computer Science',
        institution: 'National Institute of Technology, Surathkal',
        year: 'Nov 2022 - June 2026',
        description: 'Specialized in web development'
      }
    ],
    experience: [
      {
        position: 'Software Developer Intern',
        company: 'GEP Worldwide',
        duration: 'May 2025 - July 2025',
        description: 'Automation Testing'
      }
    ]
  });

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about-header">
              <h3>{aboutData.name}</h3>
              <p className="title">{aboutData.title}</p>
            </div>
            
            <p className="bio">{aboutData.bio}</p>
            
            <div className="contact-info">
              <div className="info-item">
                <strong>Email:</strong> {aboutData.email}
              </div>
              <div className="info-item">
                <strong>Phone:</strong> {aboutData.phone}
              </div>
              <div className="info-item">
                <strong>Location:</strong> {aboutData.location}
              </div>
            </div>

            <a href={aboutData.resume} target='_blank' className="btn btn-primary" download>
              <FaDownload /> Download Resume
            </a>
          </motion.div>

          <motion.div
            className="about-details"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="education-section">
              <h4><FaGraduationCap /> Education</h4>
              {aboutData.education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h5>{edu.degree}</h5>
                    <p className="institution">{edu.institution}</p>
                    <p className="duration">{edu.year}</p>
                    <p className="description">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="experience-section">
              <h4><FaBriefcase /> Experience</h4>
              {aboutData.experience.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <h5>{exp.position}</h5>
                    <p className="company">{exp.company}</p>
                    <p className="duration">{exp.duration}</p>
                    <p className="description">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 