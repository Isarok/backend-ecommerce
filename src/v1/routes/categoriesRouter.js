import categoriesController from "../../controllers/categoriesController.js";
import { Router } from "express";
import { categoriesModel } from "../../model/productModel.js";


const v1CategoriesRouter = Router();

v1CategoriesRouter
    .get("/", categoriesController.getAllCategories)
    .get("/:categoriesId", categoriesController.getCategories)
    .post("/", categoriesController.createNewCategories)
    .patch("/:categoriesId", categoriesController.updateOneCategories)
    .delete("/:categoriesId", categoriesController.deleteOneCategories)

export { v1CategoriesRouter };