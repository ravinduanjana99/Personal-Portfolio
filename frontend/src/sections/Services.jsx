import React from 'react';
import '../App.css';
import '../styles/Services.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="services" ref={ref}>
      <motion.div
        className="services-section"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="about-section">
          <span className="navbar-link-section">MY SERVICES</span>
        </div>

        <div className="services-container">
          <p className="service-topic">Frontend Development (React)</p>
          <p className="service-description">
            I build fast, responsive, and user-friendly web applications using React. My focus is on clean code, modern design, and seamless user experiences.
          </p>
        </div>

        <div className="services-container">
          <p className="service-topic">Blender 3D Design</p>
          <p className="service-description">
            I create eye-catching 3D models, animations, and visual assets in Blender, perfect for branding, games, and creative projects.
          </p>
        </div>

        <div className="services-container">
          <p className="service-topic">UI/UX Design</p>
          <p className="service-description">
            I design intuitive, attractive, and user-focused interfaces that make digital products simple and enjoyable to use.
          </p>
        </div>

        <div className="services-container">
          <p className="service-topic">Digital Marketing</p>
          <p className="service-description">
            I help brands grow online with creative marketing strategies, engaging content, and data-driven campaigns.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
