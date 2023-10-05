import React from 'react'
import { ChatTab } from '../ChatTab/ChatTab'
import { useMain } from '../../helpers/context/main-context'

import './ChatList.css'

function ChatList({setChatsArr, chatsArr, filteredChatsArr}) {

  const {showNewchatModal, setShowNewchatModal, setSelectedChat} = useMain()

  const arrayToMap = filteredChatsArr.length > 0 ? filteredChatsArr : chatsArr

  const handleCreateNewchat = () => {
    setShowNewchatModal(prev => !prev)
  }

  return (
    <div className='ChatList'>
        {
            arrayToMap.map((chat) => {
                return (
                  <div key={chat.id} onClick={() => setSelectedChat(chat)}>
                    <ChatTab chat={chat} />
                  </div>
                )
            })
        }
        <div className="newchat-btn-container">
          <button className='btn-newchat' onClick={handleCreateNewchat}>+</button>
        </div>
    </div>
  )
}

export {ChatList}