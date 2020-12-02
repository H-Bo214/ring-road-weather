import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom'
import icelandFlag from '../assets/iceland-flag.svg'

function Header() {
  return(
    <header>
      <Link to="/">
        <img 
          className="icelandic-flag"
          src={icelandFlag} 
          alt="Icelandic Flag"
        />
      </Link>
      <Link style={{textDecoration: 'none', color: '#fff'}} to="/">
        <h1>Ring Road Weather</h1>
      </Link>
      <Link to="/favorites">
        <button className="header-fav-btn" type="button">Favorites</button>
      </Link>
    </header>
  )
}

export default Header