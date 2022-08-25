import mongoose from "mongoose";
import express from 'express';
import todoRoutes from './Routes/routes.js';
import cors from 'cors';
import bodyParser from "body-parser";

const app = express();
app.use(express.json({ extended: false }));
app.use(cors());
app.use("/api/todo",todoRoutes);

const PORT = 5000;
const DB_URL = 'mongodb://localhost:27017/todo';
mongoose.connect(DB_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server is running on ${DB_URL}`)))
.catch((err) => console.log(`${err} db did not connect`))