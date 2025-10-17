const Demo1=(req,res)=>{
    res.end(`This is ${req.params.user}`)
}
const Home=(req,res)=>{
    res.end("WellCome TO OurPage")
}
module.exports={Demo1,Home}