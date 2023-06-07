import mongoose from "mongoose";

const BodegasShechema=new mongoose.Schema({
    codigo: { type:String, },
    nombres:{ type:String,   },
    descripcion:{ type:String,  },
    rol: { type: String, required: true },
    estado: { type: Number, default: 1 },
})

export default mongoose.model("Bodegas", BodegasShechema)