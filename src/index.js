import express from "express";
import { v1ProductRouter } from "./v1/routes/ProductRouter.js";
import { v1CategoriesRouter } from "./v1/routes/categoriesRouter.js";
import { v1RoleRouter } from "./v1/routes/roleRouter.js";
import { v1UserRouter } from "./v1/routes/userRouter.js";

import dotenv from 'dotenv';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/product", v1ProductRouter);
app.use("/api/v1/categories", v1CategoriesRouter);
app.use("/api/v1/roles", v1RoleRouter);
app.use("/api/v1/users", v1UserRouter);
app.use("/api/v1", v1UserRouter);




app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});