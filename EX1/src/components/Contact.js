import React from 'react';
import AnimatedText from './AnimatedText';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <div className="content-box">
        <h2><AnimatedText text="Contact Us" /></h2>
        <p><AnimatedText text="This is the contact page." /></p>
      </div>
    </div>
  );
}

export default Contact;
