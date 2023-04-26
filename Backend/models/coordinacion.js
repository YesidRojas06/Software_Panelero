import mongoose from "mongoose";

const coordinacionSchema= new mongoose.Schema({
    id :{ type:String, required: true, minlength:10},
    nombre:{type:String,maxlength:25,required:true},
    telefono:{type:String,maxlength:10},
    email:{type:String,required:true,minlength:6},
    
})
export default mongoose.model("Coordinacion",coordinacionSchema)