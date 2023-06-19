import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import materiaprimatransHttp from "../controladores/materiaprimatrans.js"
//import { validarcampos } from "../middleware/validarcampos.js";
import helpersmateriaprimatrans from "../helpers/materiaprimatrans.js"

const router=Router();

router.get('/transformaciones',
[
// check("token").custom(validarJWT),
//validarcampos
], 
materiaprimatransHttp.materiaprimatransGet)

router.post('/registrar',
[
    check('tipo','El tipo de unidad de medida es requerida').notEmpty(),
    check('cantidad','La cantidad es requerida').notEmpty(),
    check('lotes','El lote es requerido').notEmpty(),
    check('finca','La finca es requerida').notEmpty(),

    // check("token").custom(validarJWT),
    //validarcampos,
    // validarCampos
],
materiaprimatransHttp.materiaprimatransPost)

router.put('/update/:id',
[
    check('id').custom(helpersmateriaprimatrans.existmateriaprimaById),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es válido").isMongoId(),
    check('tipo','El tipo de unidad de medida es requerida').notEmpty(),
    check('cantidad','La cantidad es requerida').notEmpty(),
    check('lotes','El lote es requerido').notEmpty(),
    check('finca','La finca es requerida').notEmpty(),

    // check("token").custom(validarJWT),
    //validarcampos
], 
materiaprimatransHttp.materiaprimatransPut)

router.put('/estado/:id',
[
    check('id').custom(helpersmateriaprimatrans.existmateriaprimaById),
    // check("token").custom(validarJWT),
    //validarcampos
], materiaprimatransHttp.materiaprimatransestadoPut)



export default router

