import mongoose from "mongoose";

const ingClientesShechema=new mongoose.Schema({
    cedula: { type:mongoose.Schema.ObjectId, ref:"cedula", required:true},
    nombre: { type:mongoose.Schema.ObjectId, ref:"nombre", required:true},
    direccion: { type:mongoose.Schema.ObjectId, ref:"direccion", required:true},
    ciudad: { type:mongoose.Schema.ObjectId, ref:"ciudad", required:true},
    telefono: { type:mongoose.Schema.ObjectId, ref:"telefono", required:true},
    estado: { type: Number, default: 1 },
});

const  modeloingClientes = mongoose.model("Iclientes",ingClientesShechema);

export default modeloingClientes;