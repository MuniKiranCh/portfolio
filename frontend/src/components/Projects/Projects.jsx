import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { Tilt } from 'react-tilt';
import Chess from '../../assets/chess.jpg';
import Blog from '../../assets/blog.jpg';
import Leet from '../../assets/leet.jpg';
import Snake from '../../assets/snake_game.jpg';
import Portfolio from '../../assets/portfolio.jpg';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [projects] = useState([
    {
      _id: '1',
      title: 'Blog Verse',
      description: 'A full-featured blogging platform inspired by Medium. It features secure JWT authentication, skeleton loading for smooth UX, connection pooling with Prisma, and robust type inference and validation using Zod. The backend is powered by Cloudflare Workers and PostgreSQL, while the frontend is built with React and Vite.',
      technologies: ['React', 'Cloudflare Workers', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: Blog,
      githubUrl: 'https://github.com/MuniKiranCh/BlogVerse',
      liveUrl: 'https://blog-verse-three.vercel.app/',
      category: 'Web Development',
      featured: true
    },
    {
      _id: '2',
      title: 'CodeForTech',
      description: 'A web application that allows users to explore and practice company-wise premium coding questions. Features include company-based filtering, search by title or topic, question difficulty and frequency indicators. Built using the MERN stack, it provides a seamless experience for interview preparation and coding practice.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Weather API'],
      image: Leet,
      githubUrl: 'https://github.com/MuniKiranCh/Leetcode_Premium',
      liveUrl: 'https://leetcode-companywise.vercel.app/',
      category: 'Web Development',
      featured: true
    },
    {
      _id: '3',
      title: '2 Player Chess Game',
      description: 'A 2 player chess game built with C++. Features include a minimax algorithm for AI opponent, a user-friendly interface, and support for various chess rules.',
      technologies: ['C++', 'Minimax Algorithm', 'Design Patterns'],
      image: Chess,
      githubUrl: 'https://github.com/MuniKiranCh/2-Player-Chess-Game',
      liveUrl: 'https://github.com/MuniKiranCh/2-Player-Chess-Game',
      category: 'Game Development',
      featured: false
    },
    {
      _id: '4',
      title: 'Snake Game',
      description: 'A fully functional Snake game built with JavaScript. Features include a scoring system, mobile responsiveness, and a simple UI.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      image: Snake,
      githubUrl: 'https://github.com/MuniKiranCh/SnakeGame',
      liveUrl: 'https://munikiranch.github.io/SnakeGame/',
      category: 'Web Development',
      featured: true
    },
    {
      _id: '5',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and styled-components. Features smooth animations and interactive elements.',
      technologies: ['React', 'Styled-Components', 'Framer-Motion'],
      image: Portfolio,
      githubUrl: 'https://github.com/MuniKiranCh/portfolio',
      liveUrl: 'https://munikiran.vercel.app/',
      category: 'Web Development',
      featured: false
    }
  ]);

  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'Machine Learning'];

  // Filter projects directly based on the selected filter
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </motion.div>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
            >
              <Tilt
                options={{
                  max: 15,
                  scale: 1.05,
                  speed: 1000,
                  transition: true,
                }}
              >
                <div className="project-card">
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-links">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FaGithub />
                        </a>
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                          >
                            <FaExternalLinkAlt />
                          </a>
                        )}
                      </div>
                    </div>
                    {project.featured && (
                      <div className="featured-badge">Featured</div>
                    )}
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="no-projects"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p>No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects; 