import express from "express";
import http from "http";
import { Server } from "socket.io";
import path from 'path';
import { createServer } from "http";
import cors from 'cors';

const app = express();


const __dirname=path.resolve();




const server = createServer(app);




const io = new Server(server, {
  cors: {
    origin: "https://testing-ftvh.onrender.com",
    methods:["GET","POST"],
    credentials:true,
  },
});

app.use(cors(
  {
    origin: "https://testing-ftvh.onrender.com",
  }
))




app.use(express.json());

io.on("connection", (socket) => {
  console.log("client1 connected");

  socket.on("receiverFormSubmitted", (data) => {
    console.log("Received message:", data);

    socket.broadcast.emit("sendMessageToClient2", data.message);
    console.log("Sent message to sendMessageToReceiverPost");
  });
});






server.listen(3000, () => {
  console.log("Server is running on port 3000!");
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
 