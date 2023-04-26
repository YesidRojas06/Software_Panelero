//const express = require("express");
import express from "express";
//const express =require("cors")
import cors from "cors";
import { bdconectar } from "../database/config.js";
import pelicula from "../routes/pelicula.js"
import actores from "../routes/actores.js";
import favoritos  from "../routes/favoritos.js";
import usuarios from "../routes/usuarios.js";
import fileUpload from "express-fileupload";


class Server {
  constructor() {
    this.app = express();
    this.middlewares();
    this.port=process.env.PORT;
    this.connectarBd()
    this.routes()
  }
  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(fileUpload({
      useTempFiles:true,
    }))
  } 
  async connectarBd(){
    await bdconectar()
  }

  routes(){
    this.app.use( "/api/pelicula"  , pelicula)
    this.app.use("/api/actores" , actores)
    this.app.use("/api/favoritos" , favoritos)
    this.app.use("/api/usuarios" , usuarios)

    
  }

  escuchar() {
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en el puerto ${this.port}`);
    });
  }
}

export default Server
