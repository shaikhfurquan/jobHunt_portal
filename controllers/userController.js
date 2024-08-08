import jwt from 'jsonwebtoken'
import UserModel from '../models/userModel.js'
import bcrypt from 'bcrypt'


export const registerUser = async (req, res) => {
    try {
        const { fullName, email, phone, role, password } = req.body
        if (!fullName || !email || !phone || !role || !password) {
            return res.status(400).json({ success: false, message: "Something is missing" })
        }

        // check if the user is already exists or not
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(400).json({ success: false, message: "User already exists" })
        }

        // hashing the user password
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await UserModel.create({
            fullName,
            email,
            phone,
            password: hashedPassword,
            role
        })

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: newUser
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while registering the user",
            error: error.message
        })
    }
}


export const loginUser = async (req, res) => {
    try {
        const { email, role, password } = req.body
        if (!email || !role || !password) {
            return res.status(400).json({ success: false, message: "Something is missing" })
        }

        // check if the user is already exists or not
        let user = await UserModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" })
        }

        // checking the user password
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if (!isPasswordMatch) {
            return res.status(400).json({ success: false, message: "Invalid Credentials" })
        }

        console.log(isPasswordMatch);
        // checking wheather the role is correct or not
        if (role !== user.role) {
            return res.status(400).json({ success: false, message: "Account doesn't exists with current role" })
        }

        // working on jwt
        const tokenData = {
            userId: user._id
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRESIN });

        const cookieOptions = {
            maxAge: 1 * 2 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: 'strict',

        }

        user.password = undefined
        res.status(200).cookie("token", token, cookieOptions).json({
            success: true,
            message: `Welcome back ${user.fullName}`,
            user: user,
            token: token
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while login the user",
            error: error.message
        })
    }
}


export const logoutUser = async (req, res) => {
    try {

        res.status(200).cookie("token", "", { maxAge: 0 }).json({
            success: true,
            message: 'User logout successfully'
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while logout the user",
            error: error.message
        })
    }
}


export const updateUser = async (req, res) => {
    try {
        // console.log("current userId ==>" , req.userId )   
        // 66b480002ce1d6b9a89a4b2a

        const { fullName, email, phone, bio, skills } = req.body

        // files
        const file = req.file


        // converting the skills(string) to the skills(array)
        let skillsArray;
        if(skills){
            stringArray = skills.split(",")
        }

        const userId = req.userId
        let loginUser = await UserModel.findById(userId)
        if(!loginUser){
            return res.satus(400).json({success : false, message : "User not found"})
        }

        // updating the user data
        if(fullName) loginUser.fullName = fullName
        if(email) user.email = email
        if(phone) user.phone = phone
        if(bio) user.bio = bio
        if(skills) user.skills = skillsArray

        // saving the details of the login user
        await loginUser.save()
        loginUser.password = undefined

        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            loginUser : loginUser
        })

    } catch (error) {
        res.json({
            success: false,
            message: "Error while logout the user",
            error: error.message
        })
    }
}