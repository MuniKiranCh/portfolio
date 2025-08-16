import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase,
  FaGitAlt, FaDocker, FaAws, FaFigma, FaPython, FaJava
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [skills] = useState([
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', icon: FaHtml5, proficiency: 90, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, proficiency: 85, color: '#1572B6' },
        { name: 'JavaScript', icon: FaJs, proficiency: 88, color: '#F7DF1E' },
        { name: 'React', icon: FaReact, proficiency: 85, color: '#61DAFB' },
        { name: 'TypeScript', icon: SiTypescript, proficiency: 75, color: '#3178C6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 80, color: '#06B6D4' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, proficiency: 82, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, proficiency: 80, color: '#000000' },
        // { name: 'Python', icon: FaPython, proficiency: 70, color: '#3776AB' },
        { name: 'Java', icon: FaJava, proficiency: 65, color: '#ED8B00' }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', icon: SiMongodb, proficiency: 78, color: '#47A248' },
        { name: 'SQL', icon: FaDatabase, proficiency: 75, color: '#336791' }
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', icon: FaGitAlt, proficiency: 85, color: '#F05032' },
        { name: 'Docker', icon: FaDocker, proficiency: 60, color: '#2496ED' },
        // { name: 'AWS', icon: FaAws, proficiency: 55, color: '#FF9900' },
        // { name: 'Figma', icon: FaFigma, proficiency: 70, color: '#F24E1E' }
      ]
    }
  ]);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </motion.div>

        <div className="skills-content">
          {skills.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    whileHover={{ y: -5, scale: 1.05 }}
                  >
                    <div className="skill-icon" style={{ color: skill.color }}>
                      <skill.icon />
                    </div>
                    <div className="skill-info">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.proficiency}%` } : {}}
                          transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        />
                      </div>
                      <span className="skill-percentage">{skill.proficiency}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 