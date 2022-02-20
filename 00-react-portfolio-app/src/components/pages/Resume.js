import React from 'react';
// import File from './resume.pdf'

function Resume() {
  return (
    <div>
      <a className='' href='./resume.pdf' download>Download Resume</a>
      <h3>Proficiencies</h3>
      <ul>
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