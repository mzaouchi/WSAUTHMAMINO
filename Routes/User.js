const express = require('express')
const { SignUp, SignIn } = require('../Controllers/User')
const { UpValidation, Validation, InValidation } = require('../Middlewares/Checker')
const isAuth = require('../Middlewares/isAuth')

const userRouter = express.Router()

userRouter.post('/SignUp',UpValidation,Validation,SignUp)

userRouter.post('/SignIn',InValidation,Validation,SignIn)

userRouter.get('/currentUser',isAuth,(req,res)=> res.send(req.user))


module.exports = userRouter