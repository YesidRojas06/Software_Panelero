import { Router } from "express";
import usuariohttp from "../controladores/usuarios.js";

const rutasusuarios = Router() 

rutasusuarios.get("/",usuariohttp.usuarioget)

rutasusuarios.post("/",usuariohttp.usuariopost)

rutasusuarios.put("/:id",usuariohttp.usuarioput)

export default rutasusuarios


