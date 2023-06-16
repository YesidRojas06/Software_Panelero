import mongoose from "mongoose";
const brands = new mongoose.Schema(
    {   
        name_brands: { type: String, require: true, unique: true},
        description: { type: String, require: true},
        creator: { type: String, require: true},
        Date: { type: Date, default:Date.now },
        state: { type: String, require: true}
       
    })
export default mongoose.model("brands", brands)