import { CategoriesModel } from "../model/categoriesModel.js";


const CategoriesController = {
    getAllCategories: async ( _req, res) => {
        const allCategoriess = await CategoriesModel.getAllCategories();
         res.send(allCategoriess);
    },
    getCategories: async (_req, res) => {
        const product = await CategoriesModel.getCategories(_req.params.productId);
        res.send(`Get one product ${_req.params.productId}`);
    },
    createNewCategories: async (_req, res) => {
        const createdCategories = await CategoriesModel.createNewCategories(_req.params.productId);
        res.send(`Create one product ${_req.params.productId}`);
    },
    updateOneCategories: (res, _req) => {
        const updatedCategories = CategoriesModel.updateOneCategories(_req.params.productId);
        res.send(`Update product ${_req.params.productId}`);;
    },
    deleteOneCategories: (res, _req) => {
        CategoriesModel.deleteOneCategories(_req.params.productId);
        res.send(`Delete product ${_req.params.productId}`);
    }
}

  
export default CategoriesController 