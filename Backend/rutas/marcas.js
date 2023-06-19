import { Router } from "express";
import marcasHttp from "../controladores/marcas.js";
import {check} from "express-validator";
//import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import helpersmarcas from "../helpers/marcas.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.post('/',[
   
    check("nombremarcas", "El campo nombre es obligatorio").notEmpty(),
    check("descripcion", "El campo descripcion es obligatorio").notEmpty(),
    check("creador", "El campo nombre del creador es obligatorio").notEmpty(),
    // check("token").custom(validarJWT),

], marcasHttp.marcasPost)

.0



router.get('/', marcasHttp.marcasAllGet)




router.put('/update/:id',[[
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersmarcas.existcategoriaId), 
    check("nombremarcas", "El campo nombre es obligatorio").notEmpty(),
    check("descripcion", "El campo descripcion es obligatorio").notEmpty(),
    check("creador", "El campo nombre del creador es obligatorio").notEmpty(),
    // check("token").custom(validarJWT),

], ], marcasHttp.marcasPutId)






router.put('/estado/:id',[ 
    check('id').custom(helpersmarcas.existcategoriaId),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    // check("token").custom(validarJWT),
        
], marcasHttp.marcasPutestado)





export default router