import mongoose from "mongoose";
const Payments = new mongoose.Schema(
    {   
        DNI: { type: String, require: true, unique: true},
        ROL: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",    
            require: true 
        },
        CONCEPT: { type: String, require: true},
        Date: { type: Date, default:Date.now },
        state:{type:Number, default:1 },
        PAYMENT_METHOD: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PaymentsMethods",    
            require: true 
        },
        TIME_TO_PAY: {type: String, require: true},
        Total: {type: String, require: true}
    })
export default mongoose.model("Payments", Payments)

