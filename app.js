import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db/connectDB.js'
import cookieParser from 'cookie-parser'
import userRouter from './routes/userRoute.js'
import companyRouter from './routes/companyRoute.js'
import jobRouter from './routes/jobRoute.js'
import applicationRouter from './routes/applicationRoute.js'


const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(cookieParser())


//routes
app.use('/api/v1/user' , userRouter)
app.use('/api/v1/company' , companyRouter)
app.use('/api/v1/job' , jobRouter)
app.use('/api/v1/application' , applicationRouter)


connectDB().then(() => {
    app.listen(process.env.PORT || 4500, () => {
        console.log(`App listening on the ${process.env.PORT}`);
    })
}).catch((err) => {
    console.log('Error while runnning the app', err.message);
})