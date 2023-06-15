import mongoose from "mongoose";

const etapasShechema=new mongoose.Schema({
    nombreE: { type: String, required:true },
    descripcionEtapa:{ type: String,  required:true },
    estado: {type: Number, default: 1},
})

const modelosetapas = mongoose.model("etapas", etapasShechema );

export default modelosetapas;

//ref:"Nombre de la etapa",
//ref:"Descipcion",