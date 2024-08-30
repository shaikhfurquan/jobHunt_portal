import express from "express";
import isAuthenticated from "../middlewares/isAuth.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/applicationController.js";


const applicationRouter = express.Router()

applicationRouter.post('/apply/:id', isAuthenticated, applyJob)
applicationRouter.get('/applied/get', isAuthenticated, getAppliedJobs)
applicationRouter.get('/:id/applicants', isAuthenticated, getApplicants)
applicationRouter.post('/status/:id/update', isAuthenticated, updateStatus)

export default applicationRouter