import React, { useEffect, useState } from 'react'
import { MessageTab } from '../MessageTab/MessageTab'

import './MainChat.css';
import { useMain } from '../../helpers/context/main-context';

function MainChat({userChats, user, socket}) {
    const [messages, setMessages] = useState({});
    const {selectedChat, chatsArr, setChatsArr} = useMain();

    console.log('chatsArr', chatsArr)
    
    const messageData = {
        message: "Hey how are you Hey how are you Hey how are you?",
        status: 'received',  //sent, received
        timestamp: '4:29 PM'
    }
    
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
console.log('faltu', selectedUser);

useEffect(() => {
    const updatedUsers = Object.values(chatsArr).map(userData => {

        if (userData.id === selectedChat.id) {
            console.log("userdata",userData, selectedChat.id )
            return {
                ...userData,
                chats: {
                    ...userData.chats,
                    ...messages
                }
            };
        }
        return userData;
    });    

    console.log('updatedUsers', updatedUsers)
    
    setChatsArr(updatedUsers)
}, [messages])


 if(selectedUser && Object.keys(selectedUser.chats).length === 0) {
    return (
        <div>No chats to see here...</div>
    )
 } else {
    return (
        <div className='MainChat'>
           {chatsArr && 
           chatsArr.map((chat) => {
               return [...Object.values(chat.chats)].sort((a, b) => a.time - b.time).map((message) => {
                   console.log('fuck1', message)
                return (
                    <MessageTab user={user} key={message.id} socket={socket} messageData={messageData} message={message} />
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
