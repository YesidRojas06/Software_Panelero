import Favoritos from "../models/favoritos.js";

const favoritosPost= async (req,res)=>{
    const {nombre,pelicula}=req.body
    const favoritos = new Favoritos ({nombre,pelicula})
    
    await favoritos.save()
    res.json({
       favoritos
    })
}
const favoritosDelete = async(req,res)=>{
    const {pelicula}=req.query
    const favoritos = await usuario.findOneAndDelete({pelicula})
   
    res.json({" pelicula eliminada de favoritos":favoritos   })
}

const favoritosGet = async(req,res)=>{
    const favorito=  await  Favoritos.find()
    .populate("usuario","nombre")
    .populate("pelicula","titulo")
    res.json({
        peliculas
    })  
}

const favoritosIDGet = async(req,res)=>{
    const {id}=req.params
    const favoritos= await Favoritos.findById(id)
    res.json({
        favoritos
    })
}

export {favoritosPost,favoritosGet,favoritosDelete,favoritosIDGet}