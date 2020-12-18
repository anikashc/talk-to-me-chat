import React from 'react'
import './InfoBar.css'
import {FaSignal} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"

function InfoBar(props) {
  return (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <FaSignal className="onlineColour"/>
            <h3 className="roomName">{props.room}</h3>
        </div>
        <div className="rightInnerContainer">
            <a href="/"><FaTimes className="closeColour" /></a>
        </div>
        
        
    </div> 
    
  );
}

export default InfoBar;
