// const express = require('express')
// const { connectToMongoDB } = require('./db');
// const { validateUserData } = require('./models/userSchema');
// const {userRoutes} = require("./routes/userRoute.js")

// const app = express()

// app.use('/users', userRoutes);





// const PORT =8080;
// async function startServer() {
//     try {
//         await connectToMongoDB();
//         app.listen(PORT, () => {
//             console.log(`Server listening on port ${PORT}`);
//         });
//     } catch (err) {
//         console.error('Error starting server:', err);
//     }
// }

// startServer();

// async function addUser(user) {
//     try {
//         const db = await connectToMongoDB();
//         const usersCollection = db.collection('users');
        
//         // Validate user object
//         const { error } = userSchema.validate(user);
//         if (error) throw new Error(error.details[0].message);

//         // Insert user into the database
//         const result = await usersCollection.insertOne(user);
//         console.log(`User added: ${result.insertedId}`);
//     } catch (err) {
//         console.error('Error adding user:', err);
//     } finally {
//         await client.close();
//     }
// }

// Example usage
// addUser({ name: 'John Doe', email: 'john@example.com', age: 25 });
const express = require('express')
const bodyParser = require('body-parser');
 const { connectToMongoDB } = require('./db');
 const { validateUserData } = require('./models/userSchema');
const app = express()
const authRoute = require("./routes/auth-router");
const vehicleRoute = require("./routes/vehicle-router")
const carRoute = require("./routes/cars-router")
const dealershipRoute = require("./routes/dealership-router")
const dealRoute = require("./routes/deal-router")
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));





app.use("/api/auth", authRoute);
app.use("/api/soldVehicle",vehicleRoute)
app.use("/api/car",carRoute)
app.use("/api/dealership",dealershipRoute)
app.use("/api/deal",dealRoute)
const PORT =8080;
async function startServer() {
    try {
        await connectToMongoDB();
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    } catch (err) {
        console.error('Error starting server:', err);
    }
}

startServer();