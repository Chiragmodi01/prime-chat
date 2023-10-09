import React from 'react'
import './MessageTab.css'
import { formatTimestamp } from '../../utils/formatTime'
import { formatDate } from '../../utils/formatDate'

function MessageTab({user, message}) {
    const {value, time, date, status} = message || {}
    console.log(user)
    const msgStatus = message.user.name === user.displayName ? 'received' : 'sent'
    const timestamp = formatTimestamp(time)
    const datestamp = formatDate(date);

    //date banner, username and profile

  return (
    <div title={`Sent at ${new Date(message.time).toLocaleTimeString()} on ${datestamp}`}  className={`MessageTab ${msgStatus}`}>
          <div className="message-container">
        <span className="user-name">{user.displayName}</span>
        <span className="message">
    {value}
            <span className="timestamp">{timestamp}</span>
    </span>
        </div>
        {
            msgStatus === 'sent' ? 
            <span className="tail-out-right">
            <svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 8 13">
                <path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path>
                <path fill="#0a0741" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path>
            </svg>
            </span> : 
             <span className="tail-out-left">
             <svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 8 13">
                <path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path>
                <path fill="#0a0741" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path>
             </svg>
             </span>
        }
       
    </div>
  )
}
// #0a0741

export {MessageTab}