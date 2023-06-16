import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import transformedRawMaterialHttp from "../../controllers/Transformation/TransformedRawMaterial.js"
import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";
import helpersTransformed from "../../helpers/Transformation/dbTransformedRawMaterial.js"

const router=Router();

router.get('/transformed',
[
// check("token").custom(validarJWT),
validarcampos
], 
transformedRawMaterialHttp.transGet)

router.post('/register',
[
    check('type','El tipo de unidad de medida es requerida').notEmpty(),
    check('quantity','La cantidad es requerida').notEmpty(),
    check('lot','El lote es requerido').notEmpty(),
    check('farm','La finca es requerida').notEmpty(),

    // check("token").custom(validarJWT),
    validarcampos,
    // validarCampos
],
transformedRawMaterialHttp.transPost)

router.put('/update/:id',
[
    check('id').custom(helpersTransformed.existTransformById),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es válido").isMongoId(),
    check('type','El tipo de unidad de medida es requerida').notEmpty(),
    check('quantity','La cantidad es requerida').notEmpty(),
    check('lot','El lote es requerido').notEmpty(),
    check('farm','La finca es requerida').notEmpty(),

    // check("token").custom(validarJWT),
    validarcampos
], 
transformedRawMaterialHttp.transPut)

router.put('/state/:id',
[
    check('id').custom(helpersTransformed.existTransformById),
    // check("token").custom(validarJWT),
    validarcampos
], transformedRawMaterialHttp.transStatePut)



export default router

