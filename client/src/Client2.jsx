import React from 'react';
import io from "socket.io-client";

export default function Client2() {
  const socket = io.connect("https://testing-ftvh.onrender.com/");

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("sendMessageToClient2", (data) => {
    console.log("Received message from server:", data);
    if (data === "yes") {
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
