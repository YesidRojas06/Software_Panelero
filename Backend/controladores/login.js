// LOGIN

import modelologin from "../modelos/login.js";

const loginhttp= {
  LoginPost : async (req, res) => {
    console.log(req.files.usuario);
    const { usuario, contraseña } = req.body;
    const login = new modelologin({ usuario, contraseña });
    await login.save();
    res.json({
      msg: "Ingreso de usuario exitoso",
    });
  },

}

export default loginhttp
