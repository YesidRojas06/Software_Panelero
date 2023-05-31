import mongoose from "mongoose";

const EpsShechema=new mongoose.Schema({
    nombre: { type:mongoose.Schema.ObjectId, ref:"nombre de la eps", required:true },
    n_linea:{ type:mongoose.Schema.ObjectId, ref:"numero linea de atencion", required:true },
})

export default mongoose.model("Eps", EpsShechema)