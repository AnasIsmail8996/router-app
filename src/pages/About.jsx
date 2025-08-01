import React from 'react';
import './About.css'; // custom CSS file
import developer from './images/original-23a9368d5081d24e5277c67b35b68059.gif';
const About = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Column - Text Content */}
        <div className="col-md-6 about-text">
          <h1 className="about-heading">About Me</h1>
          <p className="about-description mt-3">
            My name is <strong>Anas Ismail</strong>. I'm a frontend developer specializing in <strong>React.js</strong>.
            <br />
            This is my demo project using <strong>React Router</strong>.
          </p>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 mt-4 mt-md-0">
          <img
            src={developer}
            alt="Anas Ismail"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
