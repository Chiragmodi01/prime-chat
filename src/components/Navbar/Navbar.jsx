import React from 'react'
import './Navbar.css';

function Navbar({user}) {
  const {displayName, photoURL} = user;

  return (
    <div className='Navbar'>
        <div className="nav-left">
            <img height={40} width={40} src={photoURL} alt="user-img" className='user-img' />
            <span className="user-name">{displayName}</span>
        </div>
        <div className="nav-right">
            <span className="option option-settings">S</span>
            <span className="option option-theme">T</span>
            <span className="option option-menu">D</span>
        </div>
    </div>
  )
}

export {Navbar}