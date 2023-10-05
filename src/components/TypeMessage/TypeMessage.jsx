import React, { useState } from 'react'
import './TypeMessage.css';

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
            <span className="option option-emoji">E</span>
            <span className="option option-add">A</span>
        </div>
        <form onSubmit={(e) => formSubmitHandler(e)} className="input-container">
            <input onChange={(e) => setInputValue(e.target.value)} value={inputValue} type="text" placeholder='Type a message' className='input-message' />
        </form>
        <div className="options-container">
            <span className="option option-add">V</span>
        </div>
    </div>
  )
}

export {TypeMessage}