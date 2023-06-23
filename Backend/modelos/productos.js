import mongoose from "mongoose";

const productosShechema = new mongoose.Schema(

    {   
        cantidad: { type: String, require: true, unique: true},
        nombregasto: { type: String, require: true},
        administrador: { type: String, require: true},
        finca:  { type: String,    require: true },
        descripcion: { type: String, require: true},
        formapago: {type: String,  require: true },
        cost_value: { type: String, require: true},
        total: { type: String, require: true},
        fecha: { type: Date, default:Date.now },
        estado: { type: Number, default: 1},
       
    })

const modeloproductos = mongoose.model("productos", productosShechema);

export default modeloproductos;


//mongoose.Schema.Types.ObjectId,ref: "productos",  
//mongoose.Schema.Types.ObjectId,ref: "finca",

