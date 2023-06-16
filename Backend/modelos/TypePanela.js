import mongoose from "mongoose";
const typePanela = new mongoose.Schema(
    {
        name: { type: String, require: true},
        price: { type: Number, require: true},
        state:{type:Number, default:1 },
        date:{type:Date, default:Date.now}
    })
export default mongoose.model("typePanela", typePanela)