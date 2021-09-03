import React from 'react';
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Alice"
                message="What's up!"
                timestamp="1 min ago"
                profilePic="https://www.planetadelibros.com/usuaris/autores/fotos/74/original/000073413_1_Alice_202007070842.jpg"
            />
            <Chat 
                name="Ashley"
                message="Hola mor"
                timestamp="30 min ago"
                profilePic="https://i.pinimg.com/originals/86/c3/26/86c326e64de996ff1a5430b568f6ae67.jpg"
            />
            <Chat 
                name="Alexandra"
                message="Hi"
                timestamp="1 hour ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/d/d3/Baywatch_Movie_Launch_Alexandra_Daddario.jpg"
            />
        </div>
    )
}

export default Chats
