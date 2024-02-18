import { isAdmin } from "../../authorizations/authorizationMiddleware.js";
import roleController from "../../controllers/roleController.js";
import { Router } from "express";

const v1RoleRouter = Router();
//v1RoleRouter.use(isAdmin); // Aplicar el middleware isAdmin a todas las rutas de roles

v1RoleRouter
    .get("/", roleController.getAllRoles)
    .post("/", roleController.createRole)
    .put("/:roleId", roleController.updateRole)
    .delete("/:roleId", roleController.deleteRole);

export { v1RoleRouter };