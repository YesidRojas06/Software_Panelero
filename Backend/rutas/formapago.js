import { Router } from "express";
import formapagohttp from "../controladores/formapago.js";
import { check } from "express-validator";
import helpersformapago from "../helpers/formapago.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutasformapago = Router();

rutasformapago.get("/",formapagohttp.formapagoGet);
rutasformapago.get("/",formapagohttp.formapagoSearchForTextGet);
rutasformapago.put("/desactivar/:id",formapagohttp.formapagoInactivoput);
rutasformapago.put("/activar/:id",formapagohttp.formapagoActivoput);
rutasformapago.put("/:id",formapagohttp.formapagoput);
rutasformapago.post('/', 
   
    
    formapagohttp.formapagoPost);

export default rutasformapago;

   // check("token").custom(validarJWT),validarCampos
// check("token").custom(validarJWT),validarCampos
// check("token").custom(validarJWT),validarCampos
// [check("token").custom(validarJWT),validarCampos],
// import { Router } from "express";