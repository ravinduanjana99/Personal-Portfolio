import React, { useState } from 'react';
import '../App.css';
import '../styles/Contact.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser'; // Import EmailJS

const Contact = () => {
  const [status, setStatus] = useState("");

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.target;

    // Replace these with your EmailJS credentials
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    try {
      await emailjs.sendForm(serviceID, templateID, form, publicKey);
      setStatus("✅ Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send. Try again.");
    }
  }

  return (
    <section id="contact" ref={ref}>
      <motion.div
        className="contact-section"
        variants={fadeInUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <span className="navbar-link-section">CONTACT ME</span>
        <div className="contact-container">
          <div className="left-form">
            <form onSubmit={handleSubmit} className="contact-form">
              <span className='input-title'>Name :</span>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <span className='input-title'>Your Email :</span>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <span className='input-title'>Your Message :</span>
              <textarea
                name="message"
                placeholder="Type Here"
                required
              ></textarea>
              <button type="submit">Send</button>
              {status && <p className="status">{status}</p>}
            </form>
          </div>
          <div className="right-image">
            <img src="/images/mail-photo.png" className="mail-icon" alt="Mail" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
