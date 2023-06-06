import mongoose from "mongoose";

const uMedidaShechema= new mongoose.Schema({
    codigo:{type:String, required:true},
    fecha:{type:Date, required:true},
    descripcion:{type:String, required:true},
    nombreU:{type:String, required:true}
    
})

export default mongoose.model("unidadesMedida", uMedidaShechema)