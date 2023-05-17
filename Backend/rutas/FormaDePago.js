import { Router } from "express";
import FormaPagohttp from "../controladores/FormaDePago.js";

const rutasFormaDePago = Router() 

rutasFormaDePago.get("/",FormaPagohttp.get)

rutasFormaDePago.post("/",FormaPagohttp.post)


rutasFormaDePago.put("/:id",FormaPagohttp.put)

export default rutasFormaDePago