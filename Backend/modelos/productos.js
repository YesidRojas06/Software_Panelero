import mongoose from "mongoose";

const productos = new mongoose.Schema(

    {   
        cantidad: { type: String, require: true, unique: true},
        nombregasto: { type: String, require: true},
        administrador: { type: String, require: true},
        finca:  { type:mongoose.Schema.Types.ObjectId,ref: "finca",    require: true },
        descripcion: { type: String, require: true},
        formapago: {type: mongoose.Schema.Types.ObjectId,ref: "productos",    require: true },
        cost_value: { type: String, require: true},
        total: { type: String, require: true},
        fecha: { type: Date, default:Date.now },
        estado: { type: String, require: true}
       
    })

export default mongoose.model("productos", productos)


