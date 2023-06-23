import mongoose from "mongoose";
const soporte = new mongoose.Schema(
    {
        emailusuario: {type: String},//{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
        comentario: {type: String, require: true},
        estado:{type:Number, default:1 },
        fecha:{type:Date, default:Date.now}
    })
export default mongoose.model("soporte", soporte)