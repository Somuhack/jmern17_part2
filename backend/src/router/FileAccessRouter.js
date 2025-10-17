const express=require("express")
const filecontroller = require("../controller/staticFileController")

const router = express.Router()

router.get("/static",filecontroller)
// router.route("/file").get(filecontroller)


module.exports=router