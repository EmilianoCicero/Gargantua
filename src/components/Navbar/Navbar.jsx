import React from 'react';
import './Navbar.css'; 
import useFeather from '../../hooks/useFeatherIcons';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Link } from 'react-router-dom';
import Button from '../Button';

function Navbar({ toggleTheme }) {
    useFeather();
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo"><i data-feather="loader" /><h2>Gargantua</h2></Link>
      <div className="links-wrapper">
      <DropdownMenu className="navbar-link" icon="grid" iconRight="chevron-down">
        <Link to="/button" className="dropdown-item">Button</Link>
        <Link to="/card" className="dropdown-item">Card</Link>
      </DropdownMenu>
      <Link to="/about" className="navbar-link"><i data-feather="user" /> About</Link>
      <Link to="https://github.com/EmilianoCicero/Gargantua" target="_blank" className="navbar-link"><i data-feather="github" /> Github</Link>
      <Button variant="transparent" onClick={toggleTheme}>Change Theme</Button>
      </div>
    </nav>
  );
}

export default Navbar;