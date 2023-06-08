import mongoose from "mongoose";

const uMedidaShechema= new mongoose.Schema({
    codigo:{type:String, required:true},
    fecha:{type:Date, required:true},
    descripcion:{type:String, required:true},
    estado: { type: Number, default: 1 },
})

const modelosuMedida = mongoose.model("unidadesMedida", uMedidaShechema);

export default modelosuMedida;