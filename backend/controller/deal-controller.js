const { ObjectId } = require('mongodb');
const dbOperation = require('../middleware/handle-db-Operation')
const addDeal = async (req,res)=>{
      try {
        const { car_id, deal_info } = req.body;
        const carObjectId = car_id ? new ObjectId(car_id) : null;

        const deal = {
            car_id, deal_info
        };
        if (carObjectId) {
            deal.car_id = [carObjectId]; 
        }
        const dealsCollection = await dbOperation.collection("deals")
        const result = await dbOperation.addData(deal,"deals")
        console.log(result);
        res.status(201).json({ message: 'Data added successfully', data: result});
    } catch (err) {
        res.status(500).json({ error: 'Internal server error', err});
    }
}


const deal = {addDeal};
module.exports = deal