import styles from "./open-ai-chat.module.css"

const OpenAIChat = () => {
  const { chatContainer, title, chatMessages, chatMessage, chatInput, chatSubmit, chatMessageBot, chatMessageUser } = styles

  return (
    <div className={chatContainer}>
      <h1 className={title}>OpenAI Chat</h1>
      <ol className={chatMessages}>
        <li className={`${chatMessage} ${chatMessageBot}`}>Hello, how are you today?</li>
        <li className={`${chatMessage} ${chatMessageUser}`}>I am doing well!</li>
      </ol>
      <input type="text" className={chatInput} placeholder="Type your message here..." />
      <button className={chatSubmit}>Send</button>
    </div>
  )
}

export default OpenAIChat
