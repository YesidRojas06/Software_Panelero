import mongoose from "mongoose";

const pagos = new mongoose.Schema(
    {   
        dni: { type: String, require: true, unique: true},
        rol: {type: mongoose.Schema.Types.ObjectId,ref: "usuarios",    require: true },
        concepto: { type: String, require: true},
        fecha: { type: Date, default:Date.now },
        estado:{type:Number, default:1 },
        formapago: {type: mongoose.Schema.Types.ObjectId,ref: "formapago",    require: true },
        tiempoparapagar: {type: String, require: true},
        Total: {type: String, require: true}
    })
export default mongoose.model("pagos", pagos)

