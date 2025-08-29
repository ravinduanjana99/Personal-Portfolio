import '../styles/Home.css';
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Laptop from "../components/Model";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.2, // trigger when 20% is visible
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="home" ref={ref}>
      <motion.div 
        className="home-section"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="left-text">
          <p className="greeting">Hi There !</p>
          <p className="name">I'm Ravindu Anjana</p>
          <div className='mainskills'>
            <p className="dev">DESIGNER</p>
            <p className="dev">DEVELOPER</p>
            <p className="dev">CREATOR</p>
          </div>
          <div className="buttons">
          <button
            className="resume-button"
            onClick={() => {
              window.open("https://personal-portfolio-production-7db0.up.railway.app/resume", "_blank");
            }}
          >
            Download Resume
          </button>
          <button
          className="resume-button"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Contact Me
        </button>
        </div>
        </div>

        <div className="canvas-container">
          <Canvas camera={{ position: [0, 1.6, 5], fov: 60 }}>
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />

            <Suspense fallback={null}>
              <Laptop />
              <Environment preset="night" />
            </Suspense>

            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
