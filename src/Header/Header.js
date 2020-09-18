import React from 'react';
import '../Header/Header.css';
import route1 from '../assets/route1.png'
import { Link } from 'react-router-dom'

function Header(props) {
  return(
    <header>
      <Link to="/">
        <img 
          className="route1-img"
          src={route1} 
          alt="road sign for Iceland's Route 1"
        />
      </Link>
      <h1>Ring Road Weather!</h1>
      <Link to="/favorites">
        <button className="header-fav-btn" type="button">Favorites</button>
      </Link>
    </header>
  )
}

export default Header

