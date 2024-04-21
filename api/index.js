import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "https://testing-ftvh.onrender.com",
  },
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
});

io.on("connection", (socket) => {
  console.log("client1 connected");

  socket.on("receiverFormSubmitted", (data) => {
    console.log("Received message:", data);
    socket.broadcast.emit("sendMessageToClient2", data.message);
    console.log("Sent message to sendMessageToReceiverPost");
  });
});

app.use("/api", (req, res, next) => {
  res.send("aur bhai");
});

app.use((req, res, next) => {
  res.send("server connected and running");
});
