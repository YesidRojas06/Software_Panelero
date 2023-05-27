import { Router } from "express";
import usuariohttp from "../controladores/usuarios.js";
import { check } from "express-validator";
import helpersUsuarios from "../helpers/usuarios.js";
import { validarCampos } from "../middleware/validar_campos.js";

const rutasusuarios = Router() 

rutasusuarios.get("/",usuariohttp.usuarioget)
rutasusuarios.post("/login",usuariohttp.usuariologin)
rutasusuarios.put("/:id",usuariohttp.usuarioput)
rutasusuarios.put("/desactivar/:id",usuariohttp.usuarioInactivoput)
rutasusuarios.put("/activar/:id",usuariohttp.usuarioActivoput)
rutasusuarios.post('/',[    
    // check('correo').custom( helpersUsuarios.existeEmail ),
    check('nombre', 'El nombre es obligatorio!').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),
    check('contrasena', 'Password no es válido').not().isEmpty(),
    // check("documento", "El número de documento es obligatorio!").not().isEmpty(),
    // check('id', 'No es un ID válido').isMongoId(),
    // check('id').custom(helpersUsuarios.existeUsuarioById), 
    // check("documento").custom(helpersUsuarios.existeUsuarioById),
    validarCampos     
],usuariohttp.usuariopost);

export default rutasusuarios



