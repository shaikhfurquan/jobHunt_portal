import mongoose from 'mongoose'

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Job title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  },
  requirements: [{ type: String }],
  salary: {
    type: Number,
    required: [true, "Salary is required"]
  },
  experienceLevel:{
    type:String,
    required : [true , "Experience level is required"]
  },
  location: {
    type: String,
    required: [true, "Job Location is required"],
  },
  jobType: {
    type: String,
    required: [true, "Job Type is required"],
  },
  position: {
    type: Number,
    required: [true, 'Number of position is required']
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: [true, 'Company of this job is required']
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, 'Recruiter for this job is required']
  },
  applications:[{
    type: mongoose.Schema.Types.ObjectId,
    ref : "Company"
  }]
}, { timestamps: true });


const JobModel = mongoose.model('Job', jobSchema)

export default JobModel