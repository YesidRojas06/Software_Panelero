import mongoose from "mongoose";

const LaboresShechema=new mongoose.Schema({
    nombre_labor: { type:mongoose.Schema.ObjectId, ref:"nombre_labor", required:true },
    area_realizar:{ type:mongoose.Schema.ObjectId, ref:"area_realizar", required:true },
    pago_diario:{ type:mongoose.Schema.ObjectId, ref:"pago_diario", required:true },
})

export default mongoose.model("Labores", LaboresShechema)