// BODEGAS

import mongoose from "mongoose";

const BodegasShechema=new mongoose.Schema({
    codigo: { type:String },
    nombres:{ type:String },
    descripcion:{ type:String  },
    // rol: { type: String, required: true },
    estado: { type: Number, default: 1 },
})

const modelobodegas = mongoose.model("Bodegas", BodegasShechema);

export default modelobodegas;