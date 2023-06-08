import mongoose from "mongoose";

const EpsShechema=new mongoose.Schema({
    nombre: { type:String,  required:true },
    n_linea:{ type:String,  required:true },
    estado: { type: Number, default: 1 },
    
});

const modeloeps = mongoose.model("Eps", EpsShechema);

export default modeloeps;