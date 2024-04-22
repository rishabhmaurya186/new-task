const express = require("express");
const router = express.Router();

const dealershipValidation = require("../models/dealership-Schema")

const dealershipController = require("../controller/dealership-controller")


router.post("/add",dealershipValidation.dealership,dealershipController.addDealership)
router.get("/",(req,res)=>{
res.send("ok")
})

module.exports = router;