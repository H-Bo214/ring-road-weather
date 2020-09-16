import React from 'react';
import '../Header/Header.css';
import route1 from '../assets/route1.png'

function Header(props) {
  return(
    <header>
      <img 
        className="route1-img"
        src={route1} 
        alt="road sign for Iceland's Route 1"
      />
      <h1>Ring Road Weather!</h1>
    </header>
  )
}

export default Header