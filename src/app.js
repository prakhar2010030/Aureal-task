import express from "express";
import dotenv from "dotenv";
import errorMiddleware from "./middlewares/Error.js";
import cors from "cors"
import morgan from "morgan";

export const app = express();

dotenv.config();

// middlewares



app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//request logger
app.use(morgan('dev'))
//to parse json
app.use(express.json({ limit: "16kb" }))

//to access url
app.use(express.urlencoded({ extended: true, limit: "16kb" }))


app.get("/", (req, res) => {
    res.send("server is working!!");
});



app.use(errorMiddleware); //custom error handler


import bookRouter from "../src/routes/book.routes.js"

app.use("/api/v1/book", bookRouter)
