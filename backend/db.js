const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://rishabhmaruya447:Monrk123@project.au6n5xe.mongodb.net/?retryWrites=true&w=majority&appName=project';
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB Atlas');
        return client.db("task");
    } catch (err) {
        console.error('Error connecting to MongoDB Atlas', err);
        throw err;
    }
}

module.exports = { connectToMongoDB };
