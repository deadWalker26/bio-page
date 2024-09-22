// App.js
import React from 'react';
import './App.css';
import profilePic from './assets/images/logo2.jpg';
function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <h1>Ashutosh Pandey</h1>
      <p>Full-stack Web Developer | Tech Enthusiast</p>
    </header>
  );
};

const About = () => {
  return (
    <section className="about">
      <h2>About Me</h2>
      <p>
      I,am Ashutosh Pandey from gomtinagar lko, and my Professional Qualification is BCA with AI and my Education Qualification is 12th with CBSC Board. My major skill is web development making sites (frontend) and my strength  is communication skills,hard work, Time management and my hobbies are  reading books,news and music production.
      </p>
    </section>
  );
};

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>JavaScript (React, Node.js)</li>
        <li>HTML & CSS</li>
        <li>Php</li>
        <li>Git & GitHub</li>
        <li>SQL Databases</li>
      </ul>
    </section>
  );
};

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div>
        <h3>Senior Developer at XYZ Inc.</h3>
        <p>Jan 2020 - Present</p>
        <p>
          Led a team of developers to build high-performing web applications and streamline company workflows.
        </p>
      </div>
      <div>
        <h3>Software Engineer at ABC Corp.</h3>
        <p>Jan 2018 - Dec 2019</p>
        <p>
          Developed multiple full-stack applications and collaborated with cross-functional teams to achieve
          project goals.
        </p>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div>
        <h3>Project 1: Portfolio Website</h3>
        <p>A personal bio site about me, showcasing my work and skills.</p>
        <a href="https://github.com/deadWalker26/My-Projects" target="_blank" rel="noopener noreferrer">GitHub Projects</a>
      </div>
      <div>
        <h3>Project 2: E-commerce App</h3>
        <p>A full-fledged e-commerce application built using Node.js, Express, and MongoDB.</p>
        <a href="https://github.com/johndoe/ecommerce" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
    </section>
  );
};

const Footer  = () => {
  return (
    <footer className="footer">
    <p>&copy; 2024 Ashutosh Pandey. All Rights Reserved.</p>
    <p>
      <a href="https://www.linkedin.com/in/ashutosh-pandey-3ab683297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
      <a href="https://github.com/deadWalker26" target="_blank" rel="noopener noreferrer"> GitHub</a>
    </p>
  </footer>
);
};

export default App;
