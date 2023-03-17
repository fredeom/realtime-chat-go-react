import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';
import ChatInput from './components/ChatInput/ChatInput';
import { connect, sendMsg } from "./api";

function App() {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
	connect(msg => {
		console.log("New Message")
		setChatHistory(prevState => [...prevState, msg])
	});
  }, []);

  const send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = '';
    }
  }
//<button onClick={send}>Hit</button>
  return (
    <div className="App">
    		<Header />
		<ChatHistory chatHistory={chatHistory} />
		<ChatInput send={send} />
    </div>
  );
}

export default App;
