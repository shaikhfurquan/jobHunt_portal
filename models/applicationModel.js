import mongoose from 'mongoose'

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: [true, "Job is required"]
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Applicant is required"]
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });


const ApplicationModel = mongoose.model('Application', applicationSchema)

export default ApplicationModel