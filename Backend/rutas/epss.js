import { Router } from "express";
import epshttp from "../controladores/epss.js";

const rutasepss = Router()
rutasepss.get("/", epshttp.epsget)

rutasepss.post("/", epshttp.epsget)

rutasepss.put("/:id", epshttp.epsput)

export default rutasepss