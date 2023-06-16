import { Router } from "express";
import {check} from "express-validator"
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import packedHttp from "../../controllers/Transformation/Packed.js"
import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";
import helpersPacked from "../../helpers/Transformation/dbPacked.js"

const router=Router();

router.get('/packed',
[
    // check("token").custom(validarJWT),
    // validarCampos,
    validarcampos
], 
packedHttp.packedGet);


router.post('/register',
[
    // check(['cellarName', 'typePacking', 'typePanela', 'formPanela' ,'totalPanelas'],
    // 'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),
    // validarCampos,
    validarcampos
], 
packedHttp.packedPost);


router.put('/update/:id',
[
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersPacked.existPackedById),
    // check(['cellarName', 'typePacking', 'typePanela', 'formPanela' ,'totalPanelas'],
    // 'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),
    // validarCampos,
    validarcampos
], 
packedHttp.packedPut);


router.put('/state/:id',
[
    check('id').custom(helpersPacked.existPackedById),
    // check("token").custom(validarJWT),
    // validarCampos,
    validarcampos
], 
packedHttp.packedStatePut);



export default router

