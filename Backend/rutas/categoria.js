import { Router } from "express";
import categoriaHttp from "../controladores/categoria.js";
import {check} from "express-validator";
//import { validarJWT } from "../middleware/validar_campos.js";

import helperscategoria from "../helpers/categoria.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const rutascategoria=Router();

rutascategoria.post('/',[
        check('nombrecategoria','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
        check('descripcion','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
        //check("token").custom(validarJWT),
        check('id').custom(helperscategoria.existcategoriaId), 
        check("id", "El id es obligatorio").notEmpty().exists(),
        check("id", "El id no es valido").isMongoId(),
        check('nombrecategoria','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
        check('descripcion','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
        //check("token").custom(validarJWT),
        check('id').custom(helperscategoria.existcategoriaId),
        check("id", "El id es obligatorio").notEmpty().exists(),
        check("id", "El id no es valido").isMongoId(),
        //check("token").custom(validarJWT),




 ] , categoriaHttp.categoriaPost);
 rutascategoria.get("/",categoriaHttp.categoriaGet);
 rutascategoria.get("/",categoriaHttp.categoriaSearchForTextGet);
 rutascategoria.put("/desactivar/:id",categoriaHttp.categoriaInactivoput);
 rutascategoria.put("/activar/:id",categoriaHttp.categoriaActivoput);
 rutascategoria.put("/:id",categoriaHttp.categoriaput);


export default rutascategoria;