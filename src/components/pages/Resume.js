import React from 'react';
import '../pages/Resume.css';

function Resume() {
  return (
    <div>
      <a className='download-link' href='./resume.pdf' download>Download Resume</a>
      <h3 className='prof-title'>Proficiencies</h3>
      <ul className='prof-list'>
        <li>MySQLExpressWeb</li>
        <li>Node.js</li>
        <li>Handlebars</li>
        <li>Git</li>
        <li>Web APIs</li>
        <li>Third Party APIs</li>
        <li>Object Relational Mapping</li>
        <li>Model-View Controller</li>
        <li>React</li>
      </ul>
    </div>
  );
}

export default Resume;