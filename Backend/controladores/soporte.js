import support from "../modelos/soporte.js"

const supportHttp = {
  // post info eps
  supportPost: async (req, res) => {
    console.log(req.body);
    const { emailUser , coment } = req.body;
    const supportAdd = new support({ emailUser, coment});
    await supportAdd.save();
    res.json("Se registro el comentario de soporte");
  },
// get all info eps
  supportGetAll: async(req, res) =>{
    const supportAll = await support.find()
    res.json(supportAll)
  },
  //edit info for email
  supportPutInfo: async(req, res)=>{
  const {id} = req.params;
  const{ emailUser, coment} = req.body
  const supportUpdate = await support.findByIdAndUpdate(id,{
    emailUser: emailUser,
    coment:coment
  });
  await supportUpdate.save()
  res.json("Comentario actualizada")
  },

  //edit state for id
  soporteInactivoput: async(req, res)=>{
    const {id} = req.params;
    const supportUpdate = await support.findByIdAndUpdate(id,{
      state: 0
    });
    await supportUpdate.save()
    res.json("Estado actualizado")
    },

    soporteActivoput: async(req, res)=>{
        const {id} = req.params;
        const supportUpdate = await support.findByIdAndUpdate(id,{
          state: 1
        });
        await supportUpdate.save()
        res.json("Estado actualizado")
        },

};

export default supportHttp;
