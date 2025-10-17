const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },
    product_image:{
        type:String,
        required:true
    },
    product_quntity:{
        type:Number,
        required:true
    },
    product_desc:{
        type:String,
        required:true
    },
    product_category:{
        type:String,
        required:true,
        enum: ["electronics", "clothing", "accessories", "home", "beauty"]
    },
},
{
    timestamps:true
}
)
const Product = mongoose.model("product",productSchema)
module.exports=Product