import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import './Messages.css'
import Message from "../Message/Message"
// import {FaSignal} from "react-icons/fa"
// import {FaTimes} from "react-icons/fa"

function Messages(props) {
  return (
    <ScrollToBottom className="messages">
        {props.messages.map((message,i) => <div key={i}><Message message={message} name={props.name} /></div>)}
    </ScrollToBottom>
     
  );
}

export default Messages;
