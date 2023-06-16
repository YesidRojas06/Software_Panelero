import mongoose from "mongoose";

const formapago = new mongoose.Schema(
    {
        nombre: { type: String, require: true},     
        fecha:  {type:Date, default:Date.now},
        estado: {type:Number, default:1 },
    })
    
export default mongoose.model("formapago", formapago)
