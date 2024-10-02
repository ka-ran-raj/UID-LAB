import React from 'react';
import AnimatedText from './AnimatedText';
import '../styles/Services.css';

function Services() {
  return (
    <div className="services">
      <div className="content-box">
        <h2><AnimatedText text="Our Services" /></h2>
        <p><AnimatedText text="This is the services page." /></p>
      </div>
    </div>
  );
}

export default Services;
