import mongoose from "mongoose";

const LaboresShechema=new mongoose.Schema({
    nombre_labor: { type:String,  required:true },
    area_realizar:{ type:String,  required:true },
    pago_diario:{ type:Number,  required:true },
    estado: { type: Number, default: 1 },
})

const modelolabores = mongoose.model("Labores", LaboresShechema);

export default modelolabores;




 //ref:"pago_diario",
 //ref:"area_realizar",
//ref:"nombre_labor",