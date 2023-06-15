import mongoose from "mongoose";

const tipopago = new mongoose.Schema(
    {
        nombre:  { type: String, require: true},
        estado:  {type:Number, default:1 },
        fecha:   {type:Date, default:Date.now}
    })
export default mongoose.model("tipopagos", tipopago)