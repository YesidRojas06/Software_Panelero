import {Router} from "express"

import { administradorDelete, administradorGet, administradorIDGet, administradorPost } from "../controllers/administrador.js";


const router = Router();

router.delete("/",administradorDelete);
router.post("/",administradorPost);
router.get("/",administradorGet);
router.get("/",administradorIDGet)



export default router;