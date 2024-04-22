const { ObjectId } = require("mongodb");
const dbOperation = require("../middleware/handle-db-Operation");
const hashing = require('../middleware/hash_password')
const addDealership = async (req, res) => {
  try {
    const {
      dealership_email,
      dealership_name,
      dealership_location,
      password,
      dealership_info,
      cars,
      deals,
      sold_vehicles,
    } = req.body;
    const carObjectId = cars ? new ObjectId(cars) : null;
    const dealObjectId = cars ? new ObjectId(deals) : null;
    const soldVehiclesObjectId = cars ? new ObjectId(sold_vehicles) : null;


    const dealership = {
        dealership_email,
        dealership_name,
        dealership_location,
        password,
        dealership_info,
    };
    if (carObjectId) {
        dealership.cars = [carObjectId];
    }
    if (dealObjectId) {
        dealership.deals = [dealObjectId];
    }
    if (soldVehiclesObjectId) {
        dealership.sold_vehicles = [soldVehiclesObjectId];
    }

    const dealershipCollection = await dbOperation.collection("dealerships");
        const userExist = await dealershipCollection.findOne({ dealership_email })
        
        if(userExist){
           return res.status(200).json("user email already exist.")
        }
        dealership.password =await hashing.hash(dealership.password)
    const result = await dbOperation.addData(dealership, "dealerships");
    console.log(result);
    res.status(201).json({ message: "Data added successfully", data: result });
  } catch (err) {
    res.status(500).json({ error: "Internal server error", err });
  }
};

const dearship = { addDealership };
module.exports = dearship;
