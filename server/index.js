import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const connect = 'mongodb://localhost:27017/BlogDB'

mongoose.connect(connect, {useNewUrlParser: true, useUnifiedTopology: true})


app.listen(4000, ()=>{
    console.log("Server is working in 4000")
})