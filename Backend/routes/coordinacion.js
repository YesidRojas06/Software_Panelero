import { Router } from "express";
import { check } from "express-validator";
import { usuarioPost,usuarioGet,coordinacionGetBuscar,coordunGetLogin,usuarioDelete } from "../controllers/coordinacion.js";
import helperscoordinacion from "../helpers/coordinacion.js";
import { validarCampos } from "../middleware/validar_campos.js";



const router = Router();

router.post("/", coordinacionPost );

router.get("/", coordinacionGet   );

router.get("/", GetBuscar    );

router.get("/", coordinacionGetLogin);

router.delete("/", usuarioDelete);


router.post('/',[    
    check('nombre', 'El nombre es obligatorio!').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('email').custom( helperscoordinacion.existeEmail ),
    check('password', 'Password no es válido').isLength({ min: 8}),
    check("documento", "El número de documento es obligatorio!").not().isEmpty(),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(helperscoordinacion.existeUsuarioById), 

    check("documento").custom(helperscoordinacion.existeNumDocumento),
    validarCampos     
],usuarioPost);


export default router;