import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import helpersPanela from "../../helpers/Maintenance/TypePanela.js"
import typePanelaHttp from "../../controllers/Maintenance/TypePanela.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.get('/all',
// [check("token").custom(validarJWT),validarCampos], 
typePanelaHttp.panelaGetAll);

router.get('/active',
// [check("token").custom(validarJWT),validarCampos], 
typePanelaHttp.panelaGetActive);

router.post('/',
[
    check(['name','price'],'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),validarCampos
], 
typePanelaHttp.panelaPost);

router.put('/update/:id',
[
    check('id').custom(helpersPanela.existPanelaId),
    // check("token").custom(validarJWT),validarCampos
], 
typePanelaHttp.panelaPutInfo);

router.put('/state/:id',
[
    check('id').custom(helpersPanela.existPanelaId),
    // check("token").custom(validarJWT),validarCampos
], 
typePanelaHttp.panelaPutState);



export default router
