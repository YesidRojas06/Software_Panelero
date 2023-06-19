import { Router } from "express";
import categoriaHttp from "../controladores/categoria.js";
import {check} from "express-validator";
//import { validarJWT } from "../middleware/validar_campos.js";

import helperscategoria from "../helpers/categoria.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.post('/',[
        check('nombrecategoria','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
        check('descripcion','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
        //check("token").custom(validarJWT),
 ] , categoriaHttp.categoriaPost)



router.get('/', categoriaHttp.categoriaAllGet)



router.put('/update/:id',[
    check('id').custom(helperscategoria.existcategoriaId), 
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('nombrecategoria','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
    check('descripcion','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
    //check("token").custom(validarJWT),
        
   ], categoriaHttp.categoriaPutId)






router.put('/estado/:id',[ 
    check('id').custom(helperscategoria.existcategoriaId),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    //check("token").custom(validarJWT),
        
], categoriaHttp.categoriaPutestado)


export default router