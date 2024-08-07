import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email must be unique"],
  },
  phone: {
    type: Number,
    required: [true, "Phone number is required"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: ['student', 'recruiter']
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  profile: {
    bio: { type: String },
    skills: [{ type: String }],
    resume: { type: String },  // url of resume
    resumeOriginalName: { type: String },
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
    profilePhoto: { type: String, default: "" }
  }
}, { timestamps: true });


const UserModel = mongoose.model('User', userSchema)

export default UserModel