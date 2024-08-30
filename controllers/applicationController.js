
import UserModel from '../models/userModel.js'
import JobModel from '../models/jobModel.js'
import ApplicationModel from '../models/applicationModel.js'
import CompanyModel from '../models/companyModel.js'


// Admin posting the job
export const applyJob = async (req, res) => {
    try {

        const userId = req.userId
        const jobId = req.params.id
        if (!jobId) {
            return res.status(400).json({ success: false, message: "Job Id is required" })
        }

        // Check whether the user already applied for the job or not
        const existingApplication = await ApplicationModel.findOne({ applicant: userId, job: jobId });
        if (existingApplication) {
            return res.status(400).json({ success: false, message: "You have already applied for this job" });
        }

        // Check if the job exists
        const job = await JobModel.findById(jobId);
        if (!job) {
            return res.status(404).json({ success: false, message: "Job not found" });
        }

        // Create a new application
        const newApplication = await ApplicationModel.create({
            applicant: userId,
            job: jobId,
        });

        // Push the new application's ID to the job's applications array and save the job
        job.applications.push(newApplication._id);
        await job.save();
        res.status(201).json({
            success: true,
            message: "Job applied successfully",
            Job: job
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while applying the Job",
            error: error.message
        })
    }
}


// Getting login user applied jobs
export const getAppliedJobs = async (req, res) => {
    try {

        const userId = req.userId
        const application = await ApplicationModel.find({ applicant: userId }).sort({ createdAt: -1 }).populate({
            path: 'job',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'company',
                options: { sort: { createdAt: -1 } },
            }
        });

        if (!application) {
            return res.status(400).json({ success: false, message: "Applied job not found" })
        }

        res.status(200).json({
            success: true,
            message: "Applied job fetched successfully",
            Application: application
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while getting applied Job",
            error: error.message
        })
    }
}


// Finding the applicant applied this jobs
export const getApplicants = async (req, res) => {
    try {

        const jobId = req.params.id
        const job = await JobModel.findById(jobId).populate({
            path: 'applications',
            options: { sort: { createdAt: -1 } },
            populate: {
                path: 'applicant'
            }
        });

        if (!job) {
            return res.status(400).json({ success: false, message: "Job Not found" })
        }
        res.status(200).json({
            success: true,
            message: "Applicants fetched successfully",
            Job: job
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while finding the applicant applied for this Job",
            error: error.message
        })
    }
}


export const updateStatus = async (req, res) => {
    try {
        const { status } = req.body
        const jobId = req.params.id
        const applicationId = req.params.id

        if (!status) {
            return res.status(400).json({ success: false, message: "Please provide the status of the application" })
        }

        // finding the application by application Id
        const application = await ApplicationModel.findById(applicationId)
        if (!application) {
            return res.status(400).json({ success: false, message: "Application Not found" })
        }

        // updating the status
        application.status = status.toLowerCase()
        await application.save()
        res.status(200).json({
            success: true,
            message: "Job status updated successfully",
            application: application
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while finding the applicant applied for this Job",
            error: error.message
        })
    }
}