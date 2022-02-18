import React from 'react';
import NavTabs from './NavTabs';
import '../components/Header.css'

function Header() {
  return (
    <header className="header">
      <NavTabs/>
    </header>
  );
}

export default Header;