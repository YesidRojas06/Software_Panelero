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




//mongoose.Schema.ObjectId, ref:"codigo",
//mongoose.Schema.ObjectId, ref:"nombres",
//mongoose.Schema.ObjectId, ref:"descripcion",
//mongoose.Schema.ObjectId, ref:"tamaño",
//mongoose.Schema.ObjectId, ref:"estadoSueldo",
//mongoose.Schema.ObjectId, ref:"clase",
//mongoose.Schema.ObjectId, ref:"padre",
//mongoose.Schema.ObjectId, ref:"densidad",