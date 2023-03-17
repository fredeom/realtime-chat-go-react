import "./Message.scss";

function Message(props) {
	const message = JSON.parse(props.message)
	return (
		<div className="Message">{message.body}</div>
	)
}

export default Message;
