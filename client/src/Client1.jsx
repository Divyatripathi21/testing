import React from 'react';
import {io} from "socket.io-client";

export default function Client1() {
  const handleClient1 = () => {
    console.log("1");
    const socket = io.connect("http://localhost:3000");
    console.log("2");
    socket.on("connect", () => {
      console.log("3");
      console.log("Connected to server");
      console.log("4");
      socket.emit("receiverFormSubmitted", { message: "yes" });
      console.log("5");
    });
  }
 
  return (
    <div>
     <button onClick={handleClient1}>Send from client1</button>
    </div>
  );
}
