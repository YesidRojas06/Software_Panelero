import mongoose from "mongoose";

const ActorSchema= new mongoose.Schema({
    nombre:{type:String,maxlength:25,required:true},
    apellido:{type:String,maxlength:25,required:true},
    edad:{type:Number,default:0},
    foto:{type:String,maxlength:300,required:true},
})

export default mongoose.model("Actor",ActorSchema)