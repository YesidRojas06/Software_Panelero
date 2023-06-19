import mongoose from "mongoose";

const empaques = new mongoose.Schema(

    {
        nombrebodega: {type: String, require: true}, //bodega
        tipoempaque: { type: mongoose.Schema.Types.ObjectId,ref: "tipoempaque",    require: true },
        colorPanela: {  type: String, require: true},
        formaPanela: { type: mongoose.Schema.Types.ObjectId,ref: "tipopanela",    require: true },
        totalPanelas:{ type: Number, require: true},
        estado: { type: Number, default: 1},
        fecha: { type: Date, default: Date.now}
    })
    
export default mongoose.model("empaques", empaques)
