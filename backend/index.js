import express, { request, response } from "express";
import { PORT,mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/bookRoute.js';

const app  = express();

app.use(express.json());

app.get('/',(req,res) => {
    console.log(req);
    return res.status(234).send('Welcome to mern stack Tutorial');
})

app.use('/books',booksRoute);

mongoose
.connect(mongoDBURL)
.then(()=> {
    console.log("App connected to database");
    app.listen(PORT,() => {
        console.log(`App listen to port: ${PORT}`);
    })
})
.catch((err) => {
    console.log(err)
});