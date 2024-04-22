
const { ObjectId } = require('mongodb');
const dbOperation = require('../middleware/handle-db-Operation')
const hashing = require('../middleware/hash_password')
const jwtHelper = require('../middleware/jwt');
const { json } = require('body-parser');
const registration = async (req,res)=>{
     try {
        const { user_email, user_location, user_info, password, vehicle_info } = req.body;
        const vehicleObjectId = vehicle_info ? new ObjectId(vehicle_info) : null;
        const user = {
            user_email,
            user_location,
            user_info,
            password,
        };
        if (vehicleObjectId) {
            user.vehicle_info = [vehicleObjectId]; 
        }
        const usersCollection = await dbOperation.collection("users")
        const userExist = await usersCollection.findOne({ user_email })
        
        if(userExist){
           return res.status(200).json("user email already exist.")
        }
        user.password =await hashing.hash(user.password)
        const token = await jwtHelper.generateToken(user.user_email)
        user.token = token;
        const result = await dbOperation.addData(user,"users")
        console.log(result);
        res.status(201).json({ message: 'User added successfully', userId: result});
    } catch (err) {
        res.status(500).json({ error: 'Internal server error', err});
    }
}

const login = async (req,res)=>{
    try {
        
        const { user_email,  password} = req.body; 

        const user = {
            user_email,
            password,
        };
        const usersCollection = await dbOperation.collection("users")
        const userExist = await usersCollection.findOne({ user_email })
        console.log(userExist);
        if(!userExist){
           return res.status(200).json("user not exist.")
        }
       const isPasswordMatch  = await hashing.compare(user.password,userExist.password)
       if (!isPasswordMatch) {
        return res.status(401).json({ message: "Incorrect password" });
    }
    res.cookie('jwt', token);
    res.status(201).json({ message: 'Login successfully', user: userExist});
    } catch (error) {
        res.status(500).json({ error: 'Internal server error', err});
    }
}

const getData = async (req, res) => {
    try {
        const { user_email } = req.body;
        const usersCollection = await dbOperation.collection("users");
        const user = await usersCollection.findOne({ user_email });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const soldVehicleCollection = await dbOperation.collection("sold_vehicles");
        const carsCollection = await dbOperation.collection("cars");
        let soldVehicles = await soldVehicleCollection.find({ _id: { $in: user.vehicle_info.map(id => id
        ) } }).toArray();
        console.log(soldVehicles);
        
      
        user.vehicle_info = await soldVehicles;
        res.status(200).json(user);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}


const auth = {registration,login,getData};
module.exports = auth