import mongoose from "mongoose";
const support = new mongoose.Schema(
    {
        emailUser: {type: String},//{type:mongoose.Schema.Types.ObjectId,ref:'Users'},
        coment: {type: String, require: true},
        state:{type:Number, default:1 },
        date:{type:Date, default:Date.now}
    })
export default mongoose.model("Support", support)