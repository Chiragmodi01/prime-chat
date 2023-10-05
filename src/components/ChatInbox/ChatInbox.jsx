import React from 'react'
import { ChatHeader } from '../ChatHeader/ChatHeader'
import { useMain } from '../../helpers/context/main-context'
import { TypeMessage } from '../TypeMessage/TypeMessage'
import { MainChat } from '../MainChat/MainChat'

import './ChatInbox.css'

function ChatInbox({user}) {
    const {selectedChat, socket} = useMain();

    console.log('socket', socket);

  return (
    <div className='ChatInbox'>
        { socket ? (
            <>
                <ChatHeader selectedChat={selectedChat} />
                <MainChat user={user} socket={socket}/>
                <TypeMessage socket={socket} />
            </>
            ):
            <div>Socket Not Connected</div>
        }
    </div>
  )
}

export {ChatInbox}