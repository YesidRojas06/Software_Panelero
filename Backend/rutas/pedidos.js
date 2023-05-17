import { Router } from "express";
import pedidohttp from "../controladores/pedidos.js";

const rutaspedidos = Router() 

rutaspedidos.get("/",pedidohttp.usuarioget)

rutaspedidos.post("/",pedidohttp.usuariopost)

rutaspedidos.put("/:id",pedidohttp.usuarioput)

export default rutaspedidos

