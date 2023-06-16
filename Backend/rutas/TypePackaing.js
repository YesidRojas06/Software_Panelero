import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import typePackingHttp from "../../controllers/Maintenance/Typepackaing.js";
import helperPackaing from "../../helpers/Maintenance/TypePackaing.js"
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.get('/all',
// [check("token").custom(validarJWT),validarCampos], 
typePackingHttp.packingGetAll);

router.get('/active',
// [check("token").custom(validarJWT),validarCampos], 
typePackingHttp.packingGetActive);

router.post('/',
[
    check(['name','maxWeight','unitsPerBox'],'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),validarCampos
], 
typePackingHttp.packingPost);

router.put('/update/:id',
[
    check('id').custom(helperPackaing.existPackaingId),
    // check("token").custom(validarJWT),validarCampos
], 
typePackingHttp.packingPutInfo);

router.put('/state/:id',
[
    check('id').custom(helperPackaing.existPackaingId),
    // check("token").custom(validarJWT),validarCampos
], 
typePackingHttp.packingPutState);



export default router
