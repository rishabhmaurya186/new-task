const express = require("express");
const router = express.Router();
const userValidation = require("../models/user-Schema")
const jwtHelper = require('../middleware/jwt')
const authController = require('../controller/auth-controller')


router.post("/register",userValidation.RegistationData,authController.registration)
router.post("/login",jwtHelper.auth,userValidation.LoginData,authController.login)
router.post("/",authController.getData)


module.exports = router;