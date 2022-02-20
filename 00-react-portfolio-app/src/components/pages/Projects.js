import React from 'react';
import Stock from '../../images/stock_ticker.png'
import '../pages/Project.css';
import Statz from '../../images/Statz_Tracker.png'
import Weather from '../../images/Weather_Dashboard.png'
import Password from '../../images/password_generator.png'
import Team from '../../images/Team_Profile_Generator.png'
import Social from '../../images/social_network_api.png'

function Projects() {
  return (
    <div>
    <h1 className='project-header'>Projects</h1>
    <div className='all-projects'>
      <section className="label">
        <header className='stoxster-header'>Stock Ticker</header>
        <a className='stoxster-card' href='https://wissamk08.github.io/BootCampProject-01/'>
          <img src={Stock} alt="Picture of Stock Ticker Website" />
          <button className='btn1'><a href="https://github.com/wissamk08/BootCampProject-01">GitHub</a></button>
        </a>
      </section>
      <section className="label">
        <header className='stoxster-header'>Stats-Tracker</header>
        <a className='stat-tracker-card' href='https://super-statz.herokuapp.com/'>
          <img src={Statz} alt="Picture of Stat Tracker Application" />
          <button className='btn2'><a href="https://github.com/lilslash/Stats-Tracker">GitHub</a></button>
        </a>
      </section>
      <section className="label">
        <header className='weather-header'>Weather Dashboard</header>
        <a className='weather-card' href="https://chr1sti4n0.github.io/Weather-Dashboard/">
          <img src={Weather} alt="Picture of Weather Dashboard application"/>
          <button className='btn3'><a href="https://github.com/Chr1sti4n0/Weather-Dashboard">GitHub</a></button>
        </a>
      </section>
      {/* Projects 2 */}
      <section className="label">
        <header className='password-header'>Password Generator</header>
        <a className='password-card' href='https://chr1sti4n0.github.io/03-Homework/'>
          <img src={Password} alt="Picture of Password Generator Application" />
          <button className='btn4'><a href="https://github.com/Chr1sti4n0/03-Homework">GitHub</a></button>
        </a>
      </section>
      <section className="label">
        <header className='profile-header'>Team Profile Generator</header>
        <a className='profile-card' href='https://github.com/Chr1sti4n0/Team-Profile-Generator'>
          <img src={Team} alt="Picture of Profile Generator Application" />
          <button className='btn5'><a href="https://github.com/Chr1sti4n0/Team-Profile-Generator">GitHub</a></button>
        </a>
      </section>
      <section className="label">
        <header className='social-header'>Social Network API</header>
        <a className='social-card' href="https://github.com/Chr1sti4n0/Social-Network-API">
          <img src={Social} alt="Picture of Social Network API application"/>
          <button className='btn6'><a href="https://vimeo.com/677535709">Demo</a></button>
        </a>
      </section>
      </div>
    </div >
  );
}

export default Projects;