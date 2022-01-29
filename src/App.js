import './App.css';
import TextInput from './TextInput';
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]); //store all messages into array "messages"

  function sendMessage(msg) {
    console.log("MY MESSAGE", msg); //log message into console
    setMessages([msg, ...messages]); //add onto array (old array+new items)
  }
  console.log(messages); //logs array of messages into console

  return (
  <div className="App"> 
    <header className="header">
      <img className="logo"/>
      <div className="title">Let's Chat!</div>
    </header>
    <div className = "messages">{}
      {messages.map((msg)=>{
        return <div className="message">{msg}</div>
      })}
    </div>
    <TextInput sendMessage={sendMessage} />  
    </div>
  );
}

export default App;