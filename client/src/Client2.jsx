import React from 'react';
import {io} from "socket.io-client";

export default function Client2() {
  console.log("c2-1");
  const socket = io.connect("https://testing-ftvh.onrender.com/");
  console.log("c2-2");
  socket.on("connect", () => {
    console.log("c2-3");
    console.log("Connected to server");

  });

  socket.on("sendMessageToClient2", (data) => {
    console.log("c2-4");
    console.log("Received message from server:", data);
    if (data === "yes") {
      console.log("c2-5");
      console.log("success");
    }
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });

  return (
    <div>
      client2
    </div>
  );
}
