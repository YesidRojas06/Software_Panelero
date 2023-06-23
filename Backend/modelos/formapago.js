import mongoose from "mongoose";

const formapagoShechema = new mongoose.Schema({
        nombrePago: {type:String, require:true},
        codigoPago: { type:String, require: true},     
        tipoPago: { type:Number, require: true}, 
        fecha : {type:Date, default:Date.now},
        estado: {type:Number, default:1 },
        
    });
    

const modeloformapago = mongoose.model("formapago", formapagoShechema);

export default modeloformapago;
