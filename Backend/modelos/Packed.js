import mongoose from "mongoose";

const packeds = new mongoose.Schema(
    {
        cellarName: 
        {
            type: String, 
            require: true
        }, //bodega
        typePacking: 
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "TypePackings",    
            require: true 
        },
        colorPanela: //COLOR
        {  
            type: String, 
            require: true
        },
        formPanela: 
        { 
            type: mongoose.Schema.Types.ObjectId,
            ref: "typePanela",    
            require: true 
        },
        totalPanelas:
         { 
            type: Number, 
            require: true
        },
        state: { type: Number, default: 1},
        date: { type: Date, default: Date.now}
    })
    
export default mongoose.model("Pack", packeds)
