import React from 'react';
import '../App.css';
import '../styles/About.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" ref={ref}>
      <motion.div
        className="about-section"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <span className="navbar-link-section">ABOUT ME</span>

        <div className="about-content">
          <img
            src="/images/my-image.png"
            className="about-image"
            alt="MyImage"
          />
          <div className="about-text">
            I am a Frontend Developer with React.js and a UX/UI Designer, currently learning Python to craft creative solutions for real-world problems. I also work on 3D design with Blender, combining technology and creativity to build innovative apps and digital experiences. I am passionate about solving real-world challenges by integrating my design and development skills into meaningful solutions.
            
            <div className="media-icons">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img src="/images/github-icon.png" className="media-icon" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/ravindu-anjana-509758204" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-icon.png" className="media-icon" alt="LinkedIn" />
              </a>
              <a href="https://x.com/RavinduAnjana24?t=JsJYtHpZfVycDplxZHFUqQ&s=09" target="_blank" rel="noopener noreferrer">
                <img src="/images/twitter-icon.png" className="media-icon" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
