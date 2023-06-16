import { Router } from "express";
import categoryHttp from "../../controllers/Inventory/category.js";
import {check} from "express-validator";
import { validarJWT } from "../../middlewares/Login/validar-jwt.js";

import helpersCategory from "../../helpers/Inventory/Category.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.post('/',[
        check('name_category','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
        check('description','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
        check("token").custom(validarJWT),
 ] , categoryHttp.categoryPost)



router.get('/', categoryHttp.categoryAllGet)



router.put('/update/:id',[
    check('id').custom(helpersCategory.existCategoryId), 
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('name_category','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
    check('description','El campo de identificacion "DNI" es obligatorio').not().isEmpty(),
    check("token").custom(validarJWT),
        
   ], categoryHttp.categoryPutId)






router.put('/state/:id',[ 
    check('id').custom(helpersCategory.existCategoryId),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check("token").custom(validarJWT),
        
], categoryHttp.categoryPutState)


export default router