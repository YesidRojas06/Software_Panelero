import mongoose from "mongoose";

const categoria = new mongoose.Schema(
    {   
        nombrecategoria: { type: String, require: true, unique: true},
        descripcion: { type: String, require: true},
        fecha: { type: Date, default:Date.now },
        estado: { type: String, require: true}
       
    })
    
export default mongoose.model("categoria", categoria)


