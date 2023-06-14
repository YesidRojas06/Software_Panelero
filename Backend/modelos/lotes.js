import mongoose from "mongoose";

const LotesShechema=new mongoose.Schema({
    codigo: { type: String, required:true},
    nombres:{ type: String ,required:true},
    descripcion: { type: String ,required:true},
    tamaño: { type: String ,required:true},
    estadoSueldo: { type:  String ,required:true},
    clase: { type: String ,required:true},
    padre: { type: String ,required:true},
    densidad: { type: String ,required: true},
    estado: { type: Number, default: 1 },
})

const modelosLotes = mongoose.model("Lotes", LotesShechema);

export default modelosLotes;

