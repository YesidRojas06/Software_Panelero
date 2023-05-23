// LOGIN

import mongoose from "mongoose";

const LoginSchema= new mongoose.Schema({
    usuario: { type:String, maxlength:25, required:true},
    contraseña:{  type:String, maxlength:25, required:true},
})

export default mongoose.model("Usuario", LoginSchema)