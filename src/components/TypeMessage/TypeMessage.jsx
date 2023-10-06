import React, { useState } from 'react'
import './TypeMessage.css';
import {Add, EmojiLaughing, Mic} from '../../utils/styledIcons';

function TypeMessage({socket}) {
    const [inputValue, setInputValue] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        socket.emit('message', inputValue);
        console.log(inputValue, socket);
        setInputValue('');
    }


  return (
    <div className='TypeMessage'>
        <div className="options-container">
            <span className="option option-emoji" title='Emoji'>
                <EmojiLaughing size={25} />
            </span>
            <span className="option option-add" title='Attach'>
                <Add size={25} />
            </span>
        </div>
        <form onSubmit={(e) => formSubmitHandler(e)} className="input-container">
            <input onChange={(e) => e.target.value !== " " && setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Type a message' className='input-message' />
        </form>
        <div className="options-container">
            <span className="option option-mic" title='Record'>
                <Mic size={25} />
            </span>
        </div>
    </div>
  )
}

export {TypeMessage}