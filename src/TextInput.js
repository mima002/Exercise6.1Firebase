import "./TextInput.css";
import { useState } from "react";
import { FiSend, FiCamera } from 'react-icons/fi';

function TextInput(props) {
    const [text, setText] = useState('')
    
    // send message and empty string
    function send() {
        props.sendMessage(text);
        setText(""); 
    }
    
    // press "Enter" key to send message 
    function onKeyPress(e) {
        if (e.key === "Enter") {
            send();
        }
    }

    return (
        <footer className = "footer">
            <button className = "camera"
                onClick={props.showCamera}
                style={{left:10, right:'auto'}}>
                <FiCamera style={{height:20, width:20}} />
            </button>
            <input 
                className = "text-input"
                value = {text}
                onChange = {(e) => setText(e.target.value)}
                onKeyPress = {onKeyPress}
                />
            <button className="send" onClick={send}>
                <FiSend style={{height:20, width:20}} />
            </button>
        </footer> 
    );
}

export default TextInput;