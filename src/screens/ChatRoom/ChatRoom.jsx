import React from 'react'
import { ChatList, Navbar, SearchBar, ChatInbox, InboxPlaceholder } from '../../components'
import './ChatRoom.css';
import { useMain } from '../../helpers/context/main-context';

function ChatRoom({user, setChatsArr, searchVal, setSearchVal, chatsArr, filteredChatsArr, handleSignOut}) {

  const {selectedChat, socket} = useMain();
  console.log('socketsocket', user)
  
  return (
    <div className='ChatRoom'>
      <div className="chatroom-main">
      <div className='fixed-top'>
        <Navbar handleSignOut={handleSignOut} user={user} />
        <SearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
      </div>
        <ChatList setChatsArr={setChatsArr} chatsArr={chatsArr} filteredChatsArr={filteredChatsArr} />
      </div>
      <div className="chatroom-chat">
        {
          selectedChat ? <ChatInbox user={user} /> : <InboxPlaceholder />
        }
      </div>
    </div>
  )
}

export {ChatRoom}