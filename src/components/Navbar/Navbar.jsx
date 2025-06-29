import React from 'react';
import './Navbar.css'; 
import Button from '../Button/Button';
import useFeather from '../../hooks/useFeatherIcons';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { Link } from 'react-router-dom';
function Navbar() {
    useFeather();
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo"><i data-feather="loader" /><h2>Gargantua</h2></Link>
      <div className="links-wrapper">
      <DropdownMenu icon="grid" iconRight="chevron-down">
        <Link to="/button" className="dropdown-item">Button</Link>
        <Link to="/card" className="dropdown-item">Card</Link>
      </DropdownMenu>
      <Link to="/" className="navbar-link"><i data-feather="user" />About</Link>
      <Link to="/" className="navbar-link"><i data-feather="github" />Github</Link>
      </div>
    </nav>
  );
}

export default Navbar;