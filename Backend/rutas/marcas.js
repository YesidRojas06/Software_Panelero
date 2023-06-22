import { Router } from "express";
import marcasHttp from "../controladores/marcas.js";
import {check} from "express-validator";
//import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import helpersmarcas from "../helpers/marcas.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const rutasmarcas=Router();

rutasmarcas.get("/",marcasHttp.marcasGet);
rutasmarcas.get("/",marcasHttp.marcasSearchForTextGet);
rutasmarcas.put("/desactivar/:id",marcasHttp.marcasInactivoput);
rutasmarcas.put("/activar/:id",marcasHttp.marcasActivoput);
rutasmarcas.put("/:id",marcasHttp.marcasput);


rutasmarcas.post('/',[
   
    check("nombremarcas", "El campo nombre es obligatorio").notEmpty(),
    check("descripcion", "El campo descripcion es obligatorio").notEmpty(),
    check("creador", "El campo nombre del creador es obligatorio").notEmpty(),
    // check("token").custom(validarJWT),

], marcasHttp.marcasPost);










rutasmarcas.put('/update/:id',[[
    
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersmarcas.existcategoriaId), 
    check("nombremarcas", "El campo nombre es obligatorio").notEmpty(),
    check("descripcion", "El campo descripcion es obligatorio").notEmpty(),
    check("creador", "El campo nombre del creador es obligatorio").notEmpty(),
    // check("token").custom(validarJWT),
    check('id').custom(helpersmarcas.existcategoriaId),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    // check("token").custom(validarJWT),

], ], marcasHttp.marcasPutId);












export default rutasmarcas;