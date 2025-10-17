const path = require("path")
const FileAccess =(req,res)=>{
    res.sendFile(path.join(__dirname),'data', 'products.json')
}
module.exports=FileAccess