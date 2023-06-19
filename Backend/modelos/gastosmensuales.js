import mongoose from "mongoose";

const gastosmensuales = new mongoose.Schema(
    {   
        Name_spent: { type: String, require: true, unique: true},
        Finca: { type:mongoose.Schema.Types.ObjectId,ref: "Farm",    require: true },
        Description: { type: String, require: true},
        Date: { type: Date, default:Date.now },
        state:{type:Number, default:1 },
        PAYMENT_METHOD: {type: mongoose.Schema.Types.ObjectId,ref: "PaymentsMethods",    require: true },
        costValue: {type: String, require: true},
        Total: {type: String, require: true},
    })

export default mongoose.model("gastosmensuales", gastosmensuales)