import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import path from 'path';




const __dirname=path.resolve();

const app = express();
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://testing-ftvh.onrender.com",
  },
});





server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

io.on("connection", (socket) => {
  console.log("client1 connected");

  socket.on("receiverFormSubmitted", (data) => {
    console.log("Received message:", data);

    socket.broadcast.emit("sendMessageToClient2", data.message);
    console.log("Sent message to sendMessageToReceiverPost");
  });
});




app.use("/api",(req, res, next) => {
 res.send("aur bhai")
  });

  
    
  app.use(express.static(path.join(__dirname, '/client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
  });



  app.use((req, res, next) => {
    res.send("server conneted and running hiiiiiiiiiiiiiiii")
     });
 