import './App.css';
import TextInput from './TextInput';
import { useState } from "react";
import Message from "./Message";
import Camera from 'react-snap-pic';
import { use100vh } from "react-div-100vh";
import NamePicker from './NamePicker.js';
import { useDB, db } from './db';

// Component called App
function App() {
  const height = use100vh();
  
  const messages = useDB();
  
  // add showCamera into state
  const [showCamera, setShowCamera] = useState(false)

  const [username,setUsername] = useState("");

  // add text input into state to edit username
  // const [editName, setEditName] = useState(false);

  // // set username to the screen
  // const [name, setName] = useState("");

  // function "sendMessages" runs when we click the send button
  function sendMessage(text) {
    if (!text.trim()) return;
    // create a new message object
    const newMessage = {
      text: text,
      time: Date.now(),
      user: username,
    };
    db.send(newMessage); //add onto array (old array+new items)
  }

  console.log(messages); //logs array of messages into console every time state changes
  

  // takePicture function to log image and close camera after taking picture 
  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  }


  // return HTML
  return (
    <div className="App"
      style= {{height:height, minHeight: height, maxHeight: height}}
    > 
      <header className="header">
        <img className="logo"/>
        <div className="title">Let's Chat!</div>
        <NamePicker setUsername = {setUsername} />
      </header>
  
      <div className = "messages">
        {messages.map((msg, i) => {
        // loops over every message in "messages" array and return a Message component
        // spreading all items in msg
        // "key" needs to be a unique value for each item 
          return <Message {...msg} key={i} fromMe={msg.user === username} />;
        })}
      </div>
      <TextInput sendMessage = {sendMessage} //send message 
        // add camera component but only if showCamera is true
          showCamera={()=>setShowCamera(true)} /> 
      <div>
        {/* add a prop that equals takePicture */}
        {showCamera && <Camera takePicture = {takePicture} />}
      </div>
    </div> 
  );
}

export default App;