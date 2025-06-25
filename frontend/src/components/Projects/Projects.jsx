import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { Tilt } from 'react-tilt';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [projects] = useState([
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with MERN stack. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      image: 'https://via.placeholder.com/400x250/64ffda/0a192f?text=E-Commerce+Platform',
      githubUrl: 'https://github.com/yourusername/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      category: 'Web Development',
      featured: true
    },
    {
      _id: '2',
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x250/64ffda/0a192f?text=Task+Management+App',
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://task-manager-demo.com',
      category: 'Web Development',
      featured: true
    },
    {
      _id: '3',
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts using OpenWeatherMap API with beautiful UI and location-based services.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Weather API'],
      image: 'https://via.placeholder.com/400x250/64ffda/0a192f?text=Weather+Dashboard',
      githubUrl: 'https://github.com/yourusername/weather-app',
      liveUrl: 'https://weather-demo.com',
      category: 'Web Development',
      featured: false
    },
    {
      _id: '4',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and styled-components. Features smooth animations and interactive elements.',
      technologies: ['React', 'Styled-Components', 'Framer-Motion'],
      image: 'https://via.placeholder.com/400x250/64ffda/0a192f?text=Portfolio+Website',
      githubUrl: 'https://github.com/yourusername/portfolio',
      liveUrl: 'https://portfolio-demo.com',
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