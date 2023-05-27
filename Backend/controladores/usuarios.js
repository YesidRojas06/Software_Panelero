import modelousuario from "../modelos/usuarios.js";
import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

const usuariohttp = {
  usuarioget: async (req, res) => {
    const usuario = await modelousuario.find();
    res.json({ usuarios: usuario });
  },
  usuariopost: async (req, res) => {
    let { nombre, correo, contrasena, rol, estado } = req.body;

    const existe = await modelousuario.findOne({ correo: req.body.correo });

    if (existe) {
      return res.status(401).json({ msg: `El correo ya está registrado` });
      //throw new Error(`El email ya está registrado`)
    } else {
      bcrypt.hash(contrasena, 10, async function (err, hash) {
        contrasena = hash;
        console.log(contrasena);

        const usuario = new modelousuario({
          nombre,
          correo,
          contrasena,
          rol,
          estado,
        });
        await usuario.save();
        res.send("usuario creado");
      });
    }
  },
  usuariologin: async (req, res) => {
    const { correo, contrasena } = req.body;

    const user = await modelousuario.findOne({ correo: correo });
    console.log(user);
    console.log(user.contrasena);
    console.log(contrasena);

    bcrypt.compare(contrasena, user.contrasena, function (err, result) {
      if (result == false) {
        res.send("contraseña incorrecta");
      }
    });

    // user.contrasena == contrasena ? res.send('usuario login') : res.send('incorrecto')

    jwt.sign(
      { correo, contrasena },
      "secrectkey",
      { expiresIn: "1h" },
      function (err, token) {
        console.log(token, err);
        res.json({ token: token });
      }
    );
  },

  usuarioput: async (req, res) => {
    const { nombre, correo, rol } = req.body;

    console.log(req.body);
    const { id } = req.params;
    const usuario = await modelousuario.findByIdAndUpdate(id, {
      nombre,
      correo,
      rol,
    });
    await usuario.save();
    res.send(usuario);
  },

  usuarioInactivoput: async (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const usuario = await modelousuario.findByIdAndUpdate(id, { estado: 0 });
    // await user.save();
    // return res.send("usuario");
    res.send(usuario);
},

usuarioActivoput: async (req, res) => {
      console.log(req.params);
    // console.log(req.body);
    const { id } = req.params;
    const usuario = await modelousuario.findByIdAndUpdate(id, { estado: 1 });
    res.send(usuario);
  },
};

export default usuariohttp;
