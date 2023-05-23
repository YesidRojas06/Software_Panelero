// INCLUSION DE DATOS (INVENTARIO)

import mongoose from "mongoose";

const inclusionInventarioISchema= new mongoose.Schema({
    codigo: { type:String, maxlength:25, required:true},
    cantidad: { type:String, maxlength:25, required:true},
    precio: { type:Number, maxlength:50},
})

export default mongoose.model("IclusionDI", inclusionInventarioISchema)