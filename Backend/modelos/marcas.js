import mongoose from "mongoose";

const MarcasSchechema = new mongoose.Schema(
    {   
        nombremarcas: { type: String, require: true, unique: true},
        descripcion: { type: String, require: true},
        creador: { type: String, require: true},
        fecha: { type: Date, default:Date.now },
        estado: { type: Number, require: true}
       
    })

const modelomarcas =mongoose.model("Marcas", MarcasSchechema);
    
export default modelomarcas;