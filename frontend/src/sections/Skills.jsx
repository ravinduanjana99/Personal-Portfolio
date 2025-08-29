import React from 'react';
import '../App.css';
import '../styles/Skills.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="skills" ref={ref}>
      <motion.div
        className="about-section"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <span className="navbar-link-section">SKILLS</span>

        <div className="skills-container">
          <div className="skills-track">
            {[
              { src: "/images/html.png", alt: "HTML" },
              { src: "/images/javascript.png", alt: "JavaScript" },
              { src: "/images/css.png", alt: "CSS" },
              { src: "/images/java.png", alt: "Java" },
              { src: "/images/python.png", alt: "Python" },
              { src: "/images/canva.png", alt: "Canva" },
              { src: "/images/blender.png", alt: "Blender" },
              { src: "/images/figma.png", alt: "Figma" },
            ].map((skill, index) => (
              <img
                key={index}
                src={skill.src}
                alt={skill.alt}
                className="skills-icon"
              />
            ))}

            {/* Repeat for continuous scroll effect */}
            {[
              { src: "/images/html.png", alt: "HTML" },
              { src: "/images/javascript.png", alt: "JavaScript" },
              { src: "/images/css.png", alt: "CSS" },
              { src: "/images/java.png", alt: "Java" },
              { src: "/images/python.png", alt: "Python" },
              { src: "/images/canva.png", alt: "Canva" },
              { src: "/images/blender.png", alt: "Blender" },
              { src: "/images/figma.png", alt: "Figma" },
            ].map((skill, index) => (
              <img
                key={`repeat-${index}`}
                src={skill.src}
                alt={skill.alt}
                className="skills-icon"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
