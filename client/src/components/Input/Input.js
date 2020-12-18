import React from 'react'
import './Input.css'

// import {FaSignal} from "react-icons/fa"
// import {FaTimes} from "react-icons/fa"

function Input(props) {
  return (
    <form className="form">
        <input
            className="input"
            type="text"
            placeholder="Type a Message..."
            value={props.message}
            onChange={event=> props.setMessage(event.target.value)}
            onKeyPress={event=> event.key === "Enter" ? props.sendMessage(event):null}

        />
        <button className="sendButton" onClick={(event) => props.sendMessage(event)}>Send</button>
    </form>
     
  );
}

export default Input;
