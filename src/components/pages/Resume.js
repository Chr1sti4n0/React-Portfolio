import React from 'react';
import '../pages/Resume.css';

function Resume() {
  return (
    <div>
      <a className='download-link' href='./resume.pdf' download>Download Resume</a>
      <h3 className='prof-title'>Proficiencies</h3>
      <ul className='prof-list'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>MySQL</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>Handlebars</li>
        <li>Git</li>
        <li>Web APIs</li>
        <li>Third Party APIs</li>
        <li>Server Side APIs</li>
        <li>Object Relational Mapping</li>
        <li>Model View Controller</li>
        <li>React</li>
        <li>M.E.R.N.</li>
      </ul>
    </div>
  );
}

export default Resume;