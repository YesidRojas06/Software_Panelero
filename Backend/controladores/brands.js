import brands from "../../models/Inventory/brands.js"


const brandsHttp = {
    brandsPost: async (req, res) => {
    console.log(req.body);
    const { name_brands, description, creator  } = req.body;
    const brandsAdd = new brands({ name_brands, description, creator });
    await brandsAdd.save();
    res.json("saved brands");
  },


// listar todos los gastos

brandsAllGet: async ( req, res) =>{
const brandsList= await brands.find();
res.json(brandsList);
},

// modificar por id

brandsPutId: async (req, res) => {
const { id } = req.params;
const { name_brands, description, creator  } = req.body;
const brandsUpdate = await brands.findByIdAndUpdate(id, {
    name_brands, description, creator
});
await brandsUpdate.save();
res.json("brands actualizada");
},


//edit state for id
brandsPutState: async (req, res) => {
const { id } = req.params;
const { state } = req.body;
const brandsUpdateState = await brands.findByIdAndUpdate(id, {
  state: state,
});
await brandsUpdateState.save();
res.json("Estado actualizado");
},

};


export default brandsHttp;