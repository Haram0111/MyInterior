import React,  { useContext, useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import "./font-2/font2.css";
import  {io} from "socket.io-client";
import chattingBackground from '../img/chattingBackground.webp';
import "../CSS/Chatting.css";

export let socket = io("http://localhost:8080", { transports: ["websocket"] });
const Chat = () => {
  let [msg, setMsg] = useState();
  let [value, setValue] =useState('');
  socket.on('connet', function(){
    var name = prompt("이름 해보자", '')

    if (!name){
      name = '익명'
    }

    socket.emit('newUser', name)
  })

  socket.on('update', function(data){
    console.log(`${data.name}: ${data.msg}`);
  })
  
  function send(){
    console.log(value);
    socket.emit('message', {type:'message', msg:value});
  }
  return(
    <div>
      <div style={{width: "500px"}}>{msg}</div>
      <input className="test" onChange={(e)=>(setValue(e.target.value))} value={value}/>
      <button onClick={send} style={{width: "100px", height: "50px"}}></button>
    </div>

  )
};



export default Chat;