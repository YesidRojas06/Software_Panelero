import mongoose from "mongoose";


const schema= new mongoose.Schema({
    Pago:{type: String, required: true},
    acciones:{type: String, required: true},
    estado:{type:Number,required:true,default:1}
});


const modeloFormaPago= mongoose.model("Formapago",schema)

export default modeloFormaPago