import React from 'react';
import AnimatedText from './AnimatedText';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <div className="content-box">
        <h2><AnimatedText text="About Us" /></h2>
        <p><AnimatedText text="This is the about page." /></p>
      </div>
    </div>
  );
}

export default About;
