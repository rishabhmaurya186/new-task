const { ObjectId } = require('mongodb');
const dbOperation = require('../middleware/handle-db-Operation')
const addSoldeVehicle = async (req,res)=>{
      try {
        const { car_id, vehicle_info } = req.body;
        const carObjectId = car_id ? new ObjectId(car_id) : null;

        const soldVehicle = {
            car_id, vehicle_info
        };
        if (carObjectId) {
            soldVehicle.car_id = [carObjectId]; 
        }
        const soldVehicleCollection = await dbOperation.collection("sold_vehicles")
        const result = await dbOperation.addData(soldVehicle,"sold_vehicles")
        console.log(result);
        res.status(201).json({ message: 'Data added successfully', data: result});
    } catch (err) {
        res.status(500).json({ error: 'Internal server error', err});
    }
}


const vehicle = {addSoldeVehicle};
module.exports = vehicle