import React, { useEffect, useState } from 'react'
import { MessageTab } from '../MessageTab/MessageTab'

import './MainChat.css';
import { useMain } from '../../helpers/context/main-context';

function MainChat({selectedChat, userChats, user, socket}) {
    const [messages, setMessages] = useState({});
    const {chatsArr, setChatsArr} = useMain();

    
    useEffect(() => {
        const messageListener = (message) => {
            setMessages((prevMessages) => {
                const newMessage = {...prevMessages};
                newMessage[message.id] = message;
                return newMessage
            })
        }


    const deleteMessageListener = (messageID) => {
        setMessages((prevMessages) => {
            const newMessages = {...prevMessages};
            delete newMessages[messageID];
            return newMessages;
        })
    }

    socket.on('message', messageListener);
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('getMessages');

    return () => {
        socket.off('message', messageListener);
        socket.off('deleteMessage', deleteMessageListener);
    }
    
}, [socket])

const selectedUser = chatsArr.find(user => user.id === selectedChat.id);

useEffect(() => {
    const updatedUsers = Object.values(chatsArr).map(userData => {
        if (userData.id === selectedChat.id) {
            return {
                ...userData,
                chats: {
                    ...userData.chats,
                    ...messages //1, 2, 3
                }
            };
        }
        return userData;
    });    
    
    setChatsArr(updatedUsers)
}, [messages, selectedChat])


 if(selectedUser && Object.keys(selectedUser.chats).length === 0) {
    return (
        <div className='nochat-placeholder'>Start your conversation with {selectedChat.userName}</div>
    )
 } else {
    return (
        <div className='MainChat'>
           {chatsArr && 
           chatsArr.map((chat) => {
               return [...Object.values(chat.chats)].sort((a, b) => a.time - b.time).map((message) => {
                return (
                    <MessageTab user={user} key={message.id} socket={socket} message={message} />
                );
            })
        }
        )
        }
    
        </div>
      )
 }
}

export {MainChat}
