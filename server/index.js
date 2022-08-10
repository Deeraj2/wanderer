import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'

const app = express();

dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors())

app.use('/posts', postRoutes)

// const connect = 'mongodb://localhost:27017/BlogDB'

mongoose.connect(process.env.CONNECTION_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
    console.log(`Server is working in ${PORT}`)
})