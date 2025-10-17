const User = require("../model/user")
const { addDataService,GetAllDataService,DeleteByIdService,GetByIdService,UpdateByIdService } = require("../services/Userervise.js")
const addData = async (req,res)=>{
    try {
        const {name,email,password}=req.body
        if(!name || !email || !password){
            return res.status(400).json({message:"Please fill all fields",suceess:false})
        }
        const result = await addDataService(req.body,User)
      
     if(result){
        return res.status(201).json({msg:"Data Added Successfully",success:true})
     }else{
        console.log("Data Not Added")
     }
        
    } catch (error) {
        console.log(error);
        
    }
}
const GetAllData=async (req,res)=>{
   try {
    if(req){
        const result = await GetAllDataService(User)
    if(!result){
        return res.status(404).json({message:"No Data Found",success:false})
    }
    return res.status(200).json({msg:"Data Fetched Successfully",data:result,success:true})
    }
   } catch (error) {
      return res.status(500).json({message:"Internal Server Error",success:false})
   }
}
const DeleteById=async(req,res)=>{
    try {
        if(req){
            
            const isDelete = await DeleteByIdService(User,req.params.id)
            if(!isDelete){
                return res.status(404).json({message:"No Data Found",success:false})
            }
             return res.status(200).json({msg:"Data Deleted Successfully",success:true})
        }
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({message:"Internal Server Error",success:false})
    }
}
const GetById = async (req,res)=>{
    try {
        const result = await GetByIdService(User,req.params.id)
        if(!result){
            return res.status(404).json({msg:"No Data Found",success:false})
        }
        return res.status(200).json({msg:"Data Fetched Successfully",data:result,success:true})
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"Internal Server Error",success:false})
    }
}
const UpdateById = async (req,res)=>{
    try {
        const result = await UpdateByIdService(User,req.params.id,req.body)
        if(!result){
            return res.status(404).json({msg:"No Data Found",success:false})
            }
            return res.status(200).json({msg:"Data Updated Successfully",data:result,success:true})
    } catch (error) {
        return res.status(500).json({msg:"Internal Server Error",success:false})
    }
}
module.exports={
    addData,
    GetAllData,
    DeleteById,
    GetById,
    UpdateById 
}