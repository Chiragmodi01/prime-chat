import React from 'react'
import { ChatHeader } from '../ChatHeader/ChatHeader'
import { useMain } from '../../helpers/context/main-context'
import { TypeMessage } from '../TypeMessage/TypeMessage'
import { MainChat } from '../MainChat/MainChat'
import chatDoodleArt from '../../assets/chatbg-doodle-art.png';

import './ChatInbox.css'

function ChatInbox({user}) {
    const {selectedChat, socket} = useMain();

  return (
    <div className='ChatInbox'>
      <img src={chatDoodleArt} alt="chat-doodle-art" className='chatDoodleArt-img' />
        { socket ? (
            <>
                <ChatHeader selectedChat={selectedChat} />
                <MainChat selectedChat={selectedChat} user={user} socket={socket}/>
                <TypeMessage socket={socket} />
            </>
            ):
            <div>Socket Not Connected</div>
        }
    </div>
  )
}

export {ChatInbox}