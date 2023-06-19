import mongoose from "mongoose";

const tipoempaque = new mongoose.Schema(

    {
        nombre: { type: String, require: true},
        peso: { type: Number, require: true},
        unidadescaja: { type: Number, require: true},
        estado:{type:Number, default:1 },
        fecha:{type:Date, default:Date.now}

    })

export default mongoose.model("tipoempaque", tipoempaque)
