const express = require("express")
const productControler= require("../controller/productController")
const multerMiddleware = require("../middleware/multerMiddleware")
const jwtVerify = require("../middleware/JWTverify")
const router = express.Router()

router.post("/add-data",multerMiddleware.single("image"),productControler.addProduct)
router.get("/get-all-products",productControler.getAllProducts)
router.delete("/delete/:id",jwtVerify,productControler.deleteProduct)
router.put("/update-product/:id",jwtVerify,multerMiddleware.single("image"),productControler.updateProducrData)
module.exports=router