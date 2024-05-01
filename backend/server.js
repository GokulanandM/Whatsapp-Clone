import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

// const app = express(); added in socket
const PORT = process.env.PORT || 5000;

dotenv.config();

// app.get('/',(req,res)=>{
// res.send("hello world")
// })
app.use(express.json()); // middleware for parsing JSON
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


server.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is listening on port ${PORT}`)});