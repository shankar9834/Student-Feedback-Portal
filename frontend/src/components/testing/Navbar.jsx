import React, { useState } from 'react';
import './navbar.css';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav>
      <h2 className="logo">My Website</h2>
      <div className={showMenu ? 'menu-icon open' : 'menu-icon'} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={showMenu ? 'menu-list show' : 'menu-list'}>
        <li><a href="#" className="active">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
