import mongoose from "mongoose";
const reportes = new mongoose.Schema(
    {
        Modulo: { type: String, require: true},
        Fecha: {type: Date, require: true},
        Date: { type: Date, default:Date.now },
        DescripcionModulo: {type: String, require: true}
    })
export default mongoose.model("Reportes", reportes)