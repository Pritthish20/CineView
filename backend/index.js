import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from "path";
import cors from "cors";
import fs from "fs";



//flies
import connectDB from './config/db.js';
import userRoute from './routes/userRoute.js';
import genreRoute from './routes/genreRoute.js';
import movieRoute from './routes/movieRoute.js';
import uploadRoute from './routes/uploadRoute.js';

//configuration
dotenv.config();
connectDB();

// upload path
// const uploadsPath = path.join(path.resolve(), "../frontend/uploads");

// if (!fs.existsSync(uploadsPath)) {
//   fs.mkdirSync(uploadsPath);
// }

const app=express();

app.get("/", (req, res) => {
  res.send("server is running fine");
});


//middleware

app.use(
    cors({
      origin: ["https://cine-view-ps.vercel.app", "http://localhost:5173"], 
      credentials: true,
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());

const port=process.env.PORT || 3000;
//console.log(process.env.PORT);

//routes

app.use("/api/v1/users",userRoute);
app.use("/api/v1/genre",genreRoute);
app.use("/api/v1/movies",movieRoute);
app.use("/api/v1/upload",uploadRoute);

// const __dirname = path.resolve();
// app.use("/uploads", express.static(uploadsPath));


app.listen(port,()=>console.log(`server listening on port ${port}`));