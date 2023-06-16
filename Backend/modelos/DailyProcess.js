import mongoose from "mongoose";

const dailyProcess = new mongoose.Schema({
  name: { 
    type: String, 
    require: true 
  },
  description: { 
    type: String 
  },
  hours: { 
    type: Number, 
    require: true 
  },
  people: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",    
    require: true 
},
  lot: { 
    type:mongoose.Schema.Types.ObjectId,
    ref: "Lots",    
    require: true 
},
  farm: { 
    type:mongoose.Schema.Types.ObjectId,
    ref: "Farm",    
    require: true 
},
  date: { type: Date, require: true },
  state: { type: Number, default: 1 },
});

export default mongoose.model("DailyProcess", dailyProcess);
