import mongoose from "mongoose";

const formapagoSchehema = new mongoose.Schema(
    {
        nombrePago: {type:String, require:true},
        codigoPago: { type: String, require: true},     
        tipoPago: { type: String, require: true}, 
        fecha :{type: Date, default:Date.now},
        estado: {type:Number, default:1 },
        
    })
    

const modeloformapago = mongoose.model("formapago", formapagoSchehema)
export default modeloformapago;
