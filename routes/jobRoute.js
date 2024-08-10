import express from "express";
import isAuthenticated from "../middlewares/isAuth.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/jobController.js";


const jobRouter = express.Router()

jobRouter.post('/post', isAuthenticated, postJob)
jobRouter.get('/getAllJobs', isAuthenticated, getAllJobs)
jobRouter.get('/getAdminJobs', isAuthenticated, getAdminJobs)
jobRouter.get('/get/:id', isAuthenticated, getJobById)


export default jobRouter