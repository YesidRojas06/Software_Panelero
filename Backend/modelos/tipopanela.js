import mongoose from "mongoose";

const tipopanela = new mongoose.Schema(

    {
        nombre: { type: String, require: true},
        precio: { type: Number, require: true},
        estado:{type:Number, default:1 },
        fecha:{type:Date, default:Date.now}
    })

export default mongoose.model("tipopanela", tipopanela)