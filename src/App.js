import './App.css';

function App() {
  return (
  //create app with header (logo and title "Let's Chat") and footer (text input and send button)
  <div className="App"> 
    <header className="header">
      <img className="logo"/>
      <div className="title">Let's Chat!</div>
    </header>
    <footer className="footer">
      <input className ="text-input" />
      <button className="send">send</button>
    </footer>
    </div>
  );
}

export default App;