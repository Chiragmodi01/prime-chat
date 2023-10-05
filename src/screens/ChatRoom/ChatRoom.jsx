import React from 'react'
import { ChatList, Navbar, SearchBar, ChatInbox } from '../../components'
import './ChatRoom.css';
import { useMain } from '../../helpers/context/main-context';

function ChatRoom({user, setChatsArr, searchVal, setSearchVal, chatsArr, filteredChatsArr}) {

  const {selectedChat} = useMain();
  
  return (
    <div className='ChatRoom'>
      <div className="chatroom-main">
      <div className='fixed-top'>
        <Navbar user={user} />
        <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
      </div>
        <ChatList setChatsArr={setChatsArr} chatsArr={chatsArr} filteredChatsArr={filteredChatsArr} />
      </div>
      <div className="chatroom-chat">
        {
          selectedChat ? <ChatInbox user={user} /> : <div>None Selected</div>
        }
      </div>
    </div>
  )
}

export {ChatRoom}