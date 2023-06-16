import mongoose from "mongoose";
const Product = new mongoose.Schema(
    {   
        amount: { type: String, require: true, unique: true},
        expense_name: { type: String, require: true},
        administrator: { type: String, require: true},
        Finca:  { 
            type:mongoose.Schema.Types.ObjectId,
            ref: "Farm",    
            require: true 
        },
        description: { type: String, require: true},
        PAYMENT_METHOD: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PaymentsMethods",    
            require: true 
        },
        cost_value: { type: String, require: true},
        total: { type: String, require: true},
        Date: { type: Date, default:Date.now },
        state: { type: String, require: true}
       
    })
export default mongoose.model("Product", Product)


