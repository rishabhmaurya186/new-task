const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")
const dbOperation = require('./handle-db-Operation')

const generateToken = async (email,password)=> {
    try {
      const token= jwt.sign(
        {
          email
        },
        "IamRishabh"
      );
      return token;
    } catch (error) {
      console.log(error);
    }
  };


  const auth = async (req, res,next) => {
    try {
  
      const token = req.cookies.jwt;
  
      if (!token) {
          return res.status(401).json({ message: 'Unauthorized: No token provided' });
      }
      let user_email;
  
      const data = await jwt.verify(token, "IamRishabh", (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Unauthorized: Invalid token' });
        }
        user_email = decoded.user_email;   
      })
      
      const usersCollection = await dbOperation.collection("users")
        const user = await usersCollection.findOne({ user_email })
  
      if(!user){
        return res.status(404).json({msg:'user not found'});
      }
        res.status(200).json({
            user
        })
      console.log(user);
       next()
      
    } catch (error) {
      console.log(error);
    }
  }







  const jwtHelper = {generateToken,auth}

  module.exports = jwtHelper;