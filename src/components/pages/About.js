import React from 'react';
import Profile from '../../images/photo_of_me.png'
import '../pages/About.css';

function About() {
  return (
    <div className='about-me-page'>
      <h1 className="about-me" >About Me</h1>
      <p className='story'>
      My name is Christian Jimenez and I am a full-stack software developer. This is my portfolio which was built
      using React. In this portfolio you will find my contact information, a list of a few projects I 
      have worked on, their repositories, a link to my GitHub and my resume. My educational background includes a Bachelor of 
      Science in Engineering focused in Mechanical Engineering from Arizona State University and a Master of Business 
      Administration from Grand Canyon University.
      </p>
      <img src={Profile} alt="Photo of Me" />
    </div>
  );
}

export default About;