import { Router } from "express";
import Laborhttp from "../controladores/usuarios.js";

const rutasLabores = Router() 

rutasLabores.get("/",Laborhttp.Laborget)

rutasLabores.post("/",Laborhttp.Laborpost)


rutasLabores.put("/:id",Laborhttp.Laborput)

export default rutasLabores
