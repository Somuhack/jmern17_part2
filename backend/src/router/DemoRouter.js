const express=require("express")
const demoController = require("../controller/demoController")

const router = express.Router()

router.get("/:user",demoController.Demo1)
router.get("/",demoController.Home)
module.exports=router
