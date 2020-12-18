import React from 'react'
import './Message.css'
import ReactEmoji from 'react-emoji'


function Message(props) {
    let isSentByCurrentUser= false;
    const trimmedName= props.name.trim().toLowerCase(); 

    if(props.message.user === trimmedName){
        isSentByCurrentUser=true;
    }
    
    
    if(isSentByCurrentUser){
        return(
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trimmedName}</p> 
                <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">{ReactEmoji.emojify(props.message.text)}</p>
                </div>
            </div>
        )
            
    }
    else{
        if(props.message.user=="admin"){
            return(
                <div className="messageContainer justifyStart "> 
                    <div className="messageBox backgroundRed">
                            <p className="sentText colorWhite">{ReactEmoji.emojify(props.message.text)}</p>
                    </div>
                    <p className="sentText pl-10">{props.message.user}</p>
                </div>
            )
            
        }
        else{
            return(
                <div className="messageContainer justifyStart"> 
                    <div className="messageBox backgroundLight">
                            <p className="sentText colorDark">{ReactEmoji.emojify(props.message.text)}</p>
                    </div>
                    <p className="sentText pl-10">{props.message.user}</p>
                </div>
            )
            
        }
    }
}

export default Message;
