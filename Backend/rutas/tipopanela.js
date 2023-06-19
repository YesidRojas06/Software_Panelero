import { Router } from "express";
import {check} from "express-validator";
// import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import helperstipopanela from "../helpers/tipopanela.js"
import tipopanelaHttp from "../controladores/tipopanela.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.get('/all',
// [check("token").custom(validarJWT),validarCampos], 
tipopanelaHttp.panelaGetAll);

router.get('/activo',
// [check("token").custom(validarJWT),validarCampos], 
tipopanelaHttp.panelaGetActive);

router.post('/',
[
    check(['name','price'],'Todos los campos son requeridos').not().isEmpty(),
    // check("token").custom(validarJWT),validarCampos
], 
tipopanelaHttp.panelaPost);

router.put('/update/:id',
[
    check('id').custom(helperstipopanela.existPanelaId),
    // check("token").custom(validarJWT),validarCampos
], 
tipopanelaHttp.panelaPutInfo);

router.put('/estado/:id',
[
    check('id').custom(helperstipopanela.existPanelaId),
    // check("token").custom(validarJWT),validarCampos
], 
tipopanelaHttp.panelaPutestado);



export default router
