import mongoose from "mongoose";


const schema= new mongoose.Schema({
    nombreLabor:{type: String, required: true},
    areaRealizar:{type: String, required: true},
    pago:{type: Number, required: true},
    acciones:{type: String, required: true},
    estado:{type:Number,required:true,default:1}
});


const modeloLabor= mongoose.model("Labor",schema)

export default modeloLabor