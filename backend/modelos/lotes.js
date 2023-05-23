// LOTES

import mongoose from "mongoose";

const LotesShechema=new mongoose.Schema({
    codigo: { type:mongoose.Schema.ObjectId, ref:"codigo", required:true},
    nombres:{ type:mongoose.Schema.ObjectId, ref:"nombres", required:true},
    descripcion: { type:mongoose.Schema.ObjectId, ref:"descripcion", required:true},
    tamaño: { type:mongoose.Schema.ObjectId, ref:"tamaño", required:true},
    estadoSueldo: { type:mongoose.Schema.ObjectId, ref:"estadoSueldo", required:true},
    clase: { type:mongoose.Schema.ObjectId, ref:"clase", required:true},
    padre: { type:mongoose.Schema.ObjectId, ref:"padre", required:true},
    densidad: { type:mongoose.Schema.ObjectId, ref:"densidad", required: true}
})

export default mongoose.model("Lotes", LotesShechema)