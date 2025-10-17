// CURD
const addDataService =(data,model)=>{
     const newData = new model(data)
     const result =  newData.save()
     return result
}
const FindByEmail =(email,model)=>{
    const result = model.find({email:email})
    return result
}
const GetAllDataService = (model)=>{
    const result = model.find()
    return result
}
const DeleteByIdService = (model,id)=>{
    const result = model.findByIdAndDelete(id)
    return result
}
const GetByIdService =(model,id)=>{
    const result = model.findById(id).select("-password") // Exclude password from the result
    return result
}
const UpdateByIdService =(model,id,data)=>{
    const result = model.findByIdAndUpdate(id,data,{new:true})
    return result
}
module.exports= {
    addDataService,
    GetAllDataService,
    DeleteByIdService,
    GetByIdService,
    UpdateByIdService,
    FindByEmail
}