import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";

const app = express();
app.use(express.static("public"));

const httpServer = createServer(app); // Beacuse socket io does not support express raw edge

// Initializing Socket IO
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Initializing Y-Socket IO
const ySocketIO = new YSocketIO(io);
ySocketIO.initialize();
// These are health check routes: Routes which doesn't return a data just tell us the server is running fine
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
    success: true,
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    message: "ok",
    success: true,
  });
});

httpServer.listen(3000, () => {
  console.log("Server Running on port 3000");
});
