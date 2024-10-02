import React from 'react';
import AnimatedText from './AnimatedText';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="content-box">
        <h2><AnimatedText text="Welcome to Our Website" /></h2>
        <p><AnimatedText text="This is the home page." /></p>
      </div>
    </div>
  );
}

export default Home;
