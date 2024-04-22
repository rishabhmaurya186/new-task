const express = require("express");
const router = express.Router();

const carsValidation = require("../models/cars-schema")

const carController = require("../controller/cars-controller")


router.post("/add",carsValidation.cars,carController.addCar)

module.exports = router;