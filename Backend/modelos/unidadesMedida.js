import mongoose from "mongoose";

const uMedidaShechema= new mongoose.Schema({
    nombreU:{type:String, required:true}
})

export default mongoose.model("unidadesMedida", uMedidaShechema)