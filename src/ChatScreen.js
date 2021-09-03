import React, { useState} from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";


function ChatScreen() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            name: "Alice",
            image: "https://www.planetadelibros.com/usuaris/autores/fotos/74/original/000073413_1_Alice_202007070842.jpg",
            message: "What's up!"
        },
        {
            name: "Alice",
            image: "https://www.planetadelibros.com/usuaris/autores/fotos/74/original/000073413_1_Alice_202007070842.jpg",
            message: "How  is it going?"
        },
        {
            message: "It's nice here"
        },
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput("");
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ALICE ON 21/04/21</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar 
                            className="chatScreen__avatar"
                            alt={message.name}
                            src={message.image}
                        />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )
            ))}
            
            <form className="chatScreen__input">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}              
                    className="chatScreen__inputField"  
                    type="text" 
                    placeholder="Type a message..." 
                />
                <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen
