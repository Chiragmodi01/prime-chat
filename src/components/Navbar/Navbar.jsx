import React from 'react'
import {DotsVerticalRounded, Settings, LogOut} from '../../utils/styledIcons';

import './Navbar.css';

function Navbar({user, handleSignOut}) {
  const {displayName, photoURL} = user;

  return (
    <div className='Navbar'>
        <div className="nav-left">
            <img height={40} width={40} src={photoURL} alt="user-img" className='user-img' />
            <span className="user-name">{displayName}</span>
        </div>
        <div className="nav-right">
            <span onClick={handleSignOut} className="option option-logout" title='Logout'>
              <LogOut size={23} />
            </span>
            <span className="option option-settings" title='Settings'>
              <Settings size={23} />
            </span>
            <span className="option option-menu" title='Menu'><DotsVerticalRounded size={23} /></span>
        </div>
    </div>
  )
}

export {Navbar}