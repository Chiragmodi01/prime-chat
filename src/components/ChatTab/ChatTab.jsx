import React from 'react'
import './ChatTab.css'

function ChatTab({chat}) {
  const {image, userName, id} = chat;

  return (
    <div className='ChatTab'>
      <div className="tab-left">
        <div className="user-img-container">
            <img height={50} width={50} src={image} alt="user-img" className="user-image" />
        </div>
        </div>
        <div className="tab-right">
        <div className="chat-preview">
            <span className="user-name">{userName}
            <div className="time-stamp">7:29 PM</div>
            </span>
            <span className="last-msg">this is last message</span>
        </div>
        </div>
    </div>
  )
}

export {ChatTab}