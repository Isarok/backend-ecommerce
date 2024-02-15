import express from "express";
import {v1ProductRouter} from "./v1/routes/ProductRouter.js";

import dotenv from 'dotenv';

dotenv.config()
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/product", v1ProductRouter);




app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});