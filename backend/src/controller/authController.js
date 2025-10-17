const userService = require("../services/Userervise");
const User = require("../model/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  try {
    if (req) {
      const { name, email, password } = req.body;
      const userExists = await userService.FindByEmail(email, User);
      if (userExists.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password,salt);
      const registerData = await userService.addDataService(
        { name, email, password:hashPassword },
        User
      );
      if (!registerData) {
        return res.status(500).json({ message: "User registration failed" });
      }
      return res.status(200).json({ message: "User registered successfully" });

      // console.log("userExists", userExists);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const loginController = async (req, res) => {
  try {
    if(req){
        const { email, password } = req.body;
        const user = await userService.FindByEmail(email, User);
        if (user.length==0) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const token = jwt.sign({id:user[0]._id,name:user[0].name,email:user[0].email},process.env.JWT_SECRET,{ expiresIn: '1h' });
       
        // Compare the password with the hashed password in the database
        const isMatch =  await bcrypt.compare(password, user[0].password)
        if(isMatch && token){
            // return res.status(200).json({ message: "Login successful" ,token:token});
            return res.cookie("token",token,{
               httpOnly:true, //accessible only by web server not by js
              //  secure:process.env.NODE_ENV==="production", // set to true if your using https
              secure:false,
              sameSite:"strict",
            }).json({ message: "Login successful"});
        }else{
            return res.status(400).json({ message: "Invalid email or password" });
        }
    }
  } catch (error) {
    console.log(error);
    
    return res.status(500).json({ message: "Internal server error" });
  }
}

const ProfileController = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have middleware to set req.user
    const user = await userService.GetByIdService(User, userId);
    if (!user) {
      return res.status(404).json({ message: "User not found",sucess:false});
    }
    delete user?.password; // Remove password from the response
    return res.status(200).json({ user: user , message: "User profile retrieved successfully",sucess:true});
  } catch (error) {
    
  }
}
module.exports = {
  registerController,
  loginController,
  ProfileController
};
