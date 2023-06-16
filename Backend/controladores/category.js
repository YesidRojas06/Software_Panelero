import category from "../../models/Inventory/category.js"


const categoryHttp = {
    categoryPost: async (req, res) => {
    console.log(req.body);
    const { name_category, description } = req.body;
    const categoryAdd = new category({ name_category, description});
    await categoryAdd.save();
    res.json("saved category");
  },


// listar todos los gastos

categoryAllGet: async ( req, res) =>{
const categoryList= await category.find();
res.json(categoryList);
},

// modificar por id

categoryPutId: async (req, res) => {
const { id } = req.params;
const { name_category, description  } = req.body;
const categoryUpdate = await category.findByIdAndUpdate(id, {
    name_category, description
});
await categoryUpdate.save();
res.json("category actualizada");
},


//edit state for id
categoryPutState: async (req, res) => {
const { id } = req.params;
const { state } = req.body;
const categoryUpdateState = await category.findByIdAndUpdate(id, {
  state: state,
});
await categoryUpdateState.save();
res.json("Estado actualizado");
},

};


export default categoryHttp;