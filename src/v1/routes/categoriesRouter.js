import { isAdmin } from "../../authorizations/authorizationMiddleware.js";
import categoriesController from "../../controllers/categoriesController.js";
import { Router } from "express";

const v1CategoriesRouter = Router();
//v1CategoriesRouter.use(isAdmin); // Aplicar el middleware isAdmin a todas las rutas de roles

v1CategoriesRouter
    .get("/", categoriesController.getAllCategories)
    .get("/:categoryId", categoriesController.getCategories)
    .post("/", categoriesController.createNewCategory)
    .patch("/:category_id", categoriesController.updateOneCategory)
    .delete("/:categoryId", categoriesController.deleteOneCategories);

export { v1CategoriesRouter };