import { Router } from "express";
import brandsHttp from "../../controllers/Inventory/brands.js";
import {check} from "express-validator";
import { validarJWT } from "../../middlewares/Login/validar-jwt.js";
import helpersBrands from "../../helpers/Inventory/Brands.js";
// import { validarcampos } from "../../middlewares/ValidationFields/validateFields.js";

const router=Router();

router.post('/',[
   
    check("name_brands", "El campo nombre es obligatorio").notEmpty(),
    check("description", "El campo descripcion es obligatorio").notEmpty(),
    check("creator", "El campo nombre del creador es obligatorio").notEmpty(),
    // check("token").custom(validarJWT),

], brandsHttp.brandsPost)





router.get('/', brandsHttp.brandsAllGet)




router.put('/update/:id',[[
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    check('id').custom(helpersBrands.existBrandsId), 
    check("name_brands", "El campo nombre es obligatorio").notEmpty(),
    check("description", "El campo descripcion es obligatorio").notEmpty(),
    check("creator", "El campo nombre del creador es obligatorio").notEmpty(),
    // check("token").custom(validarJWT),

], ], brandsHttp.brandsPutId)






router.put('/state/:id',[ 
    check('id').custom(helpersBrands.existBrandsId),
    check("id", "El id es obligatorio").notEmpty().exists(),
    check("id", "El id no es valido").isMongoId(),
    // check("token").custom(validarJWT),
        
], brandsHttp.brandsPutState)





export default router