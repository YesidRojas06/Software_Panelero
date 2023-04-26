import mongoose from "mongoose";

const FavoritosShechema=new mongoose.Schema({
    usuario: {type:mongoose.Schema.ObjectId,ref:"Usuario",required:true},
    pelicula:{type:mongoose.Schema.ObjectId,ref:"pelicula",required:true},
    
})
export default mongoose.model("Favoritos",FavoritosShechema)