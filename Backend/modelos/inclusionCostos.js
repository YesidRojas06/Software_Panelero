import mongoose from "mongoose";

const inclusionCostosShechema=new mongoose.Schema({
    codigo: { type:mongoose.Schema.ObjectId, ref:"codigo", required:true},
    costo: { type:mongoose.Schema.ObjectId, ref:"costo", required:true},
})

export default mongoose.model("IDclientes", inclusionCostosShechema)