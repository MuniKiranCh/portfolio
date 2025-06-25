import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import './Hero.css';

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/MuniKiranCh', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/muni-kiran-ch-22a229256/', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://x.com/MuniKiranCh', label: 'Twitter' }
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="greeting">Hi, my name is</p>
              <h1 className="name">Ch Muni Kiran</h1>
            <h2 className="title">
              I'm a{' '}
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'React Developer',
                  2000,
                  'Node.js Developer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typed-text"
              />
            </h2>
            <p className="description">
              I'm a passionate developer who loves building web applications that solve real-world problems. 
              I specialize in creating modern, responsive, and user-friendly applications using the latest technologies.
            </p>
            
            <div className="hero-buttons">
              <Link to="projects" smooth={true} duration={500}>
                <button className="btn btn-primary">View My Work</button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button className="btn">Get In Touch</button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="profile-image">
              <div className="placeholder-image">
                <span>Muni Kiran</span>
                {/* <img src={profileImage} alt="Muni Kiran" /> */}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="social-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Link to="about" smooth={true} duration={500}>
            <div className="scroll-arrow">
              <span></span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 