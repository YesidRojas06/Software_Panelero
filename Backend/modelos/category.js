import mongoose from "mongoose";
const category = new mongoose.Schema(
    {   
        name_category: { type: String, require: true, unique: true},
        description: { type: String, require: true},
        Date: { type: Date, default:Date.now },
        state: { type: String, require: true}
       
    })
export default mongoose.model("category", category)


