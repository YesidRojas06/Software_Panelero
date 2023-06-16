import mongoose from "mongoose";
const typePay = new mongoose.Schema(
    {
        name: { type: String, require: true},
        state:{type:Number, default:1 },
        date:{type:Date, default:Date.now}
    })
export default mongoose.model("typePays", typePay)
