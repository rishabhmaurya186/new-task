const { ObjectId } = require('mongodb');
const dbOperation = require('../middleware/handle-db-Operation')
const addCar = async (req,res)=>{
      try {
        const { type,
            name,
            model,
            car_info} = req.body;
        

        const car = { type,
            name,
            model,
            car_info};
       
        const carsCollection = await dbOperation.collection("cars")
        const result = await dbOperation.addData(car,"cars")
        console.log(result);
        res.status(201).json({ message: 'Data added successfully', data: result});
    } catch (err) {
        res.status(500).json({ error: 'Internal server error', err});
    }
}

// const login = async (req,res)=>{
//     try {
        
//         const { user_email,  password} = req.body; 

//         const user = {
//             user_email,
//             password,
//         };
//         const usersCollection = await dbOperation.collection("users")
//         const userExist = await usersCollection.findOne({ user_email })
//         console.log(userExist);
//         if(!userExist){
//            return res.status(200).json("user not exist.")
//         }
//        const isPasswordMatch  = await hashing.compare(user.password,userExist.password)
//        if (!isPasswordMatch) {
//         return res.status(401).json({ message: "Incorrect password" });
//     }
//     res.status(201).json({ message: 'Login successfully', user: userExist});
//     } catch (error) {
//         res.status(500).json({ error: 'Internal server error', err});
//     }
// }

const cars = {addCar};
module.exports = cars