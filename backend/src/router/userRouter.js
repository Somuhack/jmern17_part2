const express = require('express');
const router = express.Router()
const userConteroller = require("../controller/userController")
const UserAuthController = require("../controller/authController")
const Jwtverify =require("../middleware/JWTverify")

router.post("/addData",Jwtverify,userConteroller.addData)
router.get("/get-data",Jwtverify,userConteroller.GetAllData)
router.delete("/delete-data/:id",Jwtverify,userConteroller.DeleteById)
router.get("/get-byid/:id",Jwtverify,userConteroller.GetById)
router.put("/update/:id",Jwtverify,userConteroller.UpdateById)
router.route("/register").post(UserAuthController.registerController)
router.route("/login").post(UserAuthController.loginController)
router.route("/profile").get(Jwtverify,UserAuthController.ProfileController)
router.get("/auth",Jwtverify, (req, res) => {
  res.json({ user: req.user });
});
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});
module.exports=router