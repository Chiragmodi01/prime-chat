import React from 'react'
import './ChatHeader.css';
import {Search, DotsVerticalRounded} from '../../utils/styledIcons';

function ChatHeader({selectedChat}) {
  const {userName='', image=''} = selectedChat;

  return (
    <div className='ChatHeader'>
        <div className="header-left">
            <img height={40} width={40} src={image} alt="user-img" className='user-img' />
            <span className="user-name">{userName}</span>
        </div>
        <div className="header-right">
            <span className="option option-settings">
              <Search size={19} />
            </span>
            <span className="option option-menu">
              <DotsVerticalRounded size={23} />
            </span>
        </div>
    </div>
  )
}

export {ChatHeader}