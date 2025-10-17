const mongoose = require("mongoose")

const dbConn = async()=>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("DataBase Connection Successfull");
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbConn