import React from 'react';
import '../App.css';
import '../styles/Projects.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="projects" ref={ref}>
      <motion.div
        className="projects-section"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <span className="navbar-link-section">PROJECTS</span>

        <div className="projects-section">

          <div className="projects-content">
            <div className="projects-image">
              <video 
                src="/images/slidesproject.mp4" 
                controls 
                width="600" 
                autoPlay 
                loop 
                muted
                className='project-image'
              />
              <span className='project-name'>Voice Controlled Slides</span>
            </div>
            <div className="projects-text">
              Built a voice-controlled presentation system with Vosk for offline speech recognition, 
              enabling hands-free slideshow navigation via PyAutoGUI and regex-based command extraction.
            </div>
            <a href='https://github.com/ravinduanjana99/voice_controlled_slides.git' target='_blank' rel="noopener noreferrer">
              <button className="project-button">Github Repo</button>
            </a>
          </div>

          <div className="projects-content">
            <div className="projects-image">
              <video 
                src="/images/character-rigging.mp4" 
                controls 
                width="600" 
                autoPlay 
                loop 
                muted
                className='project-image'
              />
              <span className='project-name'>Real-Time Character Rigging (Python)</span>
            </div>
            <div className="projects-text">
              Developed a Python-based real-time rigging system using MediaPipe and Blender to capture body/hand movements and animate 3D characters with smooth, responsive motion.
            </div>
            <a href='https://github.com/ravinduanjana99/Real-Time-Hand-Driven-Character-Animation.git' target='_blank' rel="noopener noreferrer">
              <button className="project-button">Github Repo</button>
            </a>
          </div>

          <div className="projects-content">
            <div className="projects-image">
              <video 
                src="/images/portfolio-site.mp4" 
                controls 
                width="600" 
                autoPlay 
                loop 
                muted
                className='project-image'
              />
              <span className='project-name'>Personal Portfolio Website</span>
            </div>
            <div className="projects-text">
              Created a responsive portfolio with an interactive 3D interface, smooth animations, and a Node.js backend for contact forms, emphasizing modern UI/UX and cross-device compatibility.
            </div>
            <a href='https://github.com/ravinduanjana99/Real-Time-Hand-Driven-Character-Animation.git' target='_blank' rel="noopener noreferrer">
              <button className="project-button">Github Repo</button>
            </a>
          </div>

          <div className="projects-content">
            <div className="projects-image">
              <video 
                src="/images/ytclone.mp4" 
                controls 
                width="600" 
                autoPlay 
                loop 
                muted
                className='project-image'
              />
              <span className='project-name'>YouTube Clone</span>
            </div>
            <div className="projects-text">
              Built a responsive YouTube homepage clone, recreating key UI components using Flexbox and Grid. Emphasized clean, maintainable code, modern CSS techniques, and seamless cross-device compatibility. 
            </div>
          </div>

          <div className="projects-content">
            <div className="projects-image">
              <video 
                src="/images/campus-project.mp4" 
                controls 
                width="600" 
                autoPlay 
                loop 
                muted
                className='project-image'
              />
              <span className='project-name'>Virtual World</span>
            </div>
            <div className="projects-text">
              An interactive virtual environment built with imported Blender objects for a university project. 
              The scene highlights 3D modeling, environment design, and object integration, focusing on 
              immersive visuals and spatial composition. 
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
