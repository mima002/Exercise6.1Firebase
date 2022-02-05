import './App.css';
import TextInput from './TextInput';
import { useState } from "react";
import Message from "./Message";
import Camera from 'react-snap-pic';
import NamePicker from './namePicker.js';

// Component called App
function App() {
  
  // useState that updates UI of App using variable called "messages"
  // initial value is empty array 
  // the function "setMessages" is used to update variable "messages"
  const [messages, setMessages] = useState([]); //store all messages into array "messages"
  
  // add showCamera into state
  const [showCamera, setShowCamera] = useState(false)

  // add text input into state to edit username
  const [editName, setEditName] = useState(false);

  // set username to the screen
  const [name, setName] = useState("");

  // function "sendMessages" runs when we click the send button
  function sendMessage(text) {
    if (!text) return;
    // create a new message object
    const newMessage = {
      text,
      time: Date.now(),
      user: "Michelle",
    };
    setMessages([newMessage, ...messages]); //add onto array (old array+new items)
  }

  console.log(messages); //logs array of messages into console every time state changes
  

  // takePicture function to log image and close camera after taking picture 
  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  }

  // onPress function to console log username and close text input space 
  // when "Enter" key is pressed
  function onPress(e) {
    if (e.key === "Enter") {
      console.log(name)
      setEditName(false)
    }
} 

  // return HTML
  return (
    <div className="App"> 
      <header className="header">
        <img className="logo"/>
        <div className="title">Let's Chat!</div>

        {/* when set username button is pressed, show text input to type in username
            and press enter to save */}
        <NamePicker
          editName = {()=>setEditName(true)} 
        />
        <div>{editName && 
        <input className = "type-name"  
          onChange = {(e) => setName(e.target.value)}
          onKeyPress = {onPress} 
        />
          }
        </div>
        {/* display username on the screen*/}
        <div className = "username">
          {name}
        </div>
      </header>
  
      <div className = "messages">
        {messages.map((msg, i) => {
        // loops over every message in "messages" array and return a Message component
        // spreading all items in msg
        // "key" needs to be a unique value for each item 
          return <Message {...msg} key={i} />;
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