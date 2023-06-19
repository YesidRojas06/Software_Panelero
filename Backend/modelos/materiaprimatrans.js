import mongoose from "mongoose";

const materiaprimatrans = new mongoose.Schema(

    {
        tipo: { type: mongoose.Schema.Types.ObjectId,ref: "MeassurentUnits",    require: true },
        cantidad: { type: Number, require: true },
        finca: { type: mongoose.Schema.Types.ObjectId,ref: "finca",    require: true },
        lotes:{ type: mongoose.Schema.Types.ObjectId,ref: "Lotes",    require: true  },
        fecha: { type: Date, require: true},
        estado: { type: Number, default: 1}
    })
    


export default mongoose.model("materiaprimatrans", materiaprimatrans)
