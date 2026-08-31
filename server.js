import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { YSocketIO } from "y-socket.io/dist/server";

const app = express();
const httpServer = createServer(app); // Beacuse socket io does not support express raw edge

// These are health check routes: Routes which doesn't return a data just tell us the server is running fine
app.get("/", () => {
  resizeBy.status(200).json({
    message: "Hello World",
    success: true,
  });
});

app.get("/health", () => {});

httpServer.listen(3000, () => {
  console.log("Server Running on port 3000");
});
