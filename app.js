import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db/connectDB.js'
import cookieParser from 'cookie-parser'


const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())


connectDB().then(() => {
    app.listen(process.env.PORT || 4500, () => {
        console.log(`App listening on the ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log('Error while runnning the app', err.message);
})