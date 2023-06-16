import mongoose from "mongoose";
const typePackaing = new mongoose.Schema(
    {
        name: { type: String, require: true},
        maxWeigth: { type: Number, require: true},
        unitsPerBox: { type: Number, require: true},
        state:{type:Number, default:1 },
        date:{type:Date, default:Date.now}

    })
export default mongoose.model("TypePackings", typePackaing)
