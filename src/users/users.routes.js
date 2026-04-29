import express from "express"
import UserController from "./users.controller.js"

const userRoute = express.Router()

userRoute.post("/register",UserController.registerUser)
userRoute.post("/login",UserController.loginUser)
export default userRoute;