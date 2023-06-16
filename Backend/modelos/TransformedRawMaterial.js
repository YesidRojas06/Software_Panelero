import mongoose from "mongoose";

const transformedRawMaterial = new mongoose.Schema(
    {
        type: { type: mongoose.Schema.Types.ObjectId,
            ref: "MeassurentUnits",    
            require: true },

        quantity: { type: Number, require: true },

        farm: { type: mongoose.Schema.Types.ObjectId,
            ref: "Farm",    
            require: true },

        lot:{ type: mongoose.Schema.Types.ObjectId,
            ref: "Lots",    
            require: true  },

        date: { type: Date, require: true},
        state: { type: Number, default: 1}
    })
    


export default mongoose.model("TransformedRawMaterial", transformedRawMaterial)
