import mongoose from "mongoose";

const categoriaShechema = new mongoose.Schema(
    {   
        nombrecategoria: { type: String, require: true, unique: true},
        descripcion: { type: String, require: true},
        fecha: { type: Date, default:Date.now },
        estado: { type: Number, default: 1}
       
    });
    
const modelocategoria = mongoose.model("categoria", categoriaShechema)

export default modelocategoria;
