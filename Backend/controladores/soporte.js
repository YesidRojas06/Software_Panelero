import soporte from "../modelos/soporte.js"

const soporteHttp = {
  // post info eps
  soportePost: async (req, res) => {
    console.log(req.body);
    const { emailusuario , comentario } = req.body;
    const soporteAdd = new soporte({ emailusuario, comentario});
    await soporteAdd.save();
    res.json("Se registro el comentario de soporte");
  },
// get all info eps
  soporteGetAll: async(req, res) =>{
    const soporteAll = await soporte.find()
    res.json(soporteAll)
  },
  //edit info for email
  soportePutInfo: async(req, res)=>{
  const {id} = req.params;
  const{ emailusuario, comentario} = req.body
  const soporteUpdate = await soporte.findByIdAndUpdate(id,{
    emailusuario: emailusuario,
    comentario:comentario
  });
  await soporteUpdate.save()
  res.json("Comentario actualizada")
  },

  //edit state for id
  soporteInactivoput: async(req, res)=>{
    const {id} = req.params;
    const supportUpdate = await soporte.findByIdAndUpdate(id,{
      state: 0
    });
    await supportUpdate.save()
    res.json("Estado actualizado")
    },

    soporteActivoput: async(req, res)=>{
        const {id} = req.params;
        const supportUpdate = await soporte.findByIdAndUpdate(id,{
          state: 1
        });
        await supportUpdate.save()
        res.json("Estado actualizado")
        },

};

export default soporteHttp;
