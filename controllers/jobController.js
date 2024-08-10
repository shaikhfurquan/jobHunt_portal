
import UserModel from '../models/userModel.js'
import JobModel from '../models/jobModel.js'


// Admin posting the job
export const postJob = async (req, res) => {
    try {
        const { title, description, requirements, salary, experience, location, jobType, position, companyId } = req.body
        const userId = req.userId

        if (!title || !description || !requirements || !salary || !experience || !location || !jobType || !position || !companyId) {
            return res.status(400).json({ message: "Please fill in all fields for job post" })
        }

        const job = await JobModel.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        })
        res.status(201).json({
            success: true,
            message: "Job Posted successfully",
            Job: job
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while posting the Job",
            error: error.message
        })
    }
}

// For students
export const getAllJobs = async (req, res) => {
    try {

        // filterng the jobs
        const keyword = req.query.keyword || ""
        const query = {
            $or: [
                { title: { $regex: keyword, $options: 'i' } },
                { description: { $regex: keyword, $options: 'i' } },
            ]
        }

        // const jobs = await JobModel.find(query)
        const jobs = await JobModel.find(query).populate({ path: "company" }).sort({ createdAt: -1 })
        if (!jobs) {
            return res.status(404).json({ success: false, message: "No jobs found" })
        }


        res.status(200).json({
            success: true,
            message: `Job fetched successfully`,
            jobsCount: jobs.length,
            Jobs: jobs,
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while fetching all the Jobs",
            error: error.message
        })
    }
}


// For students
export const getJobById = async (req, res) => {
    try {

        const jobId = req.params.id
        const job = await JobModel.findById(jobId)
        if (!job) {
            return res.status(404).json({ success: false, message: "No job found with this Id" })
        }

        res.status(200).json({
            success: true,
            message: `Job fetched successfully`,
            Job: job,
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while fetching the Job",
            error: error.message
        })
    }
}


// Admin/login posted jobs
export const getAdminJobs = async (req, res) => {
    try {
        // admin/login userId
        const adminId = req.userId
        const jobs = await JobModel.find({ created_by: adminId })
        if (!jobs) {
            return res.status(404).json({ success: false, message: "No jobs found" })
        }

        res.status(200).json({
            success: true,
            message: "Admin jobs fetched successfully",
            jobsCount: jobs.length,
            jobs: jobs
        })
    } catch (error) {
        res.json({
            success: false,
            message: "Error while fetching the admin Jobs",
            error: error.message
        })
    }
}


export const updateJob = async (req, res) => {
    try {


        res.status(200).json({
            success: true,
            message: 'Job updated successfully',
            loginJob: loginJob
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while logout the Job",
            error: error.message
        })
    }
}