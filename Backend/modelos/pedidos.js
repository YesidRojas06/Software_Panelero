import mongoose from "mongoose";
const schema = new mongoose.Schema({
    documento : {type: Number, required: true},
    fecha : {type: Date, required: true},
    nombre_pedido : {type: String, required: true},
    telefono : {type: Number, required: true},
    cantidad: {type: Number, required: true},
    estado : {type: Number, required: true},
    comprobante_pago : {type: String, required: true},
    direccion : {type: String , required: true},
    saldo: { typr : Number, required : true},
    total :{ type:Number, required: true}

})

const modelopedido = mongoose.model ("pedido",schema)

export default modelopedido
