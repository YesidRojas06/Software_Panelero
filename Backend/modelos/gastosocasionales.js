import mongoose from "mongoose";

const gastosocasionales = new mongoose.Schema(

    {   
        nombregasto: { type: String, require: true, unique: true},
        finca: { type:mongoose.Schema.Types.ObjectId,ref: "finca",    require: true },
        descripcion: { type: String, require: true},
        fecha: { type: Date, default:Date.now },
        estado:{type:Number, default:1 },
        metododepago: {type: mongoose.Schema.Types.ObjectId,ref: "metododepago",    require: true },
        costValue: {type: String, require: true},
        Total: {type: String, require: true}
    })

export default mongoose.model("gastosocasionales", gastosocasionales)





