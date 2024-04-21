import React from 'react'
import io from "socket.io-client";
export default function Client1() {


  const handleClient1=()=>{
    const socket = io.connect("http://localhost:3001");
    socket.on("connect", () => {
      console.log("Connected to server");
      socket.emit("receiverFormSubmitted", { message: "yes" });
    });
  }
 
  return (
    <div>
     <button onClick={handleClient1}>Send from client1</button>
    </div>
  )
}
