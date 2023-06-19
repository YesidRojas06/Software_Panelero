import mongoose from "mongoose";

const marcas = new mongoose.Schema(
    {   
        nombremarcas: { type: String, require: true, unique: true},
        descripcion: { type: String, require: true},
        creador: { type: String, require: true},
        fecha: { type: Date, default:Date.now },
        estado: { type: String, require: true}
       
    })
    
export default mongoose.model("marcas", marcas)