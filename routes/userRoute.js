import express from "express";
import { loginUser, logoutUser, registerUser, updateUser } from "../controllers/userController.js";
import isAuthenticated from "../middlewares/isAuth.js";


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/logout', isAuthenticated, logoutUser)
userRouter.put('/update', isAuthenticated, updateUser)

export default userRouter