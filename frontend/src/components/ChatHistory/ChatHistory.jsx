import "./ChatHistory.scss";
import Message from "../Message/Message.jsx";

function ChatHistory(props) {
  const messages = props.chatHistory.map(msg => (<Message message={msg.data} />))

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {messages}
    </div>
  );
}

export default ChatHistory;
