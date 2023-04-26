import {Router} from "express";
import {check} from "express-validator";
import{usuarioPost,usuarioGet, usuarioGetBuscar, usuarioGetLogin, usuarioDelete} from "../controllers/usuario.js";
import helpersUsuario from "../helpers/usuario.js";
import { validarCampos } from "../middleware/validar_campos.js";

const router = Router();

router.get("/", usuarioGet);
router.get("/", usuarioGetBuscar);
router.get("/", usuarioGetLogin);
router.delete("/",usuarioDelete);

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('fecha_nacimiento', 'La fecha de nacimiento es obligatoria').not().isEmpty(),
    check('documento', 'El documento es obligatorio para acceder').not().isEmpty(),
    check('apellido', 'El apellido es necesario para continuar').not().isEmpty(),
    check('email').custom(helpersUsuario.existeEmail),
    check('telefono', 'El telefono es necesario para continuar').isLength({max: 10}),
    check('password','La contraseña no es correcta, vuelve a intentarlo').isLength({min: 8}),
    check("documento").custom(helpersUsuario.existeNumeroDocumento),
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(helpersUsuario.existeUsuarioById),
    validarCampos    
], usuarioPost);

export default router;