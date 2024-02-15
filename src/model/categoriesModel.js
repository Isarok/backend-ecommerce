//acá haremos los llamados a la base de datos de MySql
import {pool} from "../database/BBDD.js";
// In src/services/workoutModel.js
const CategoriesModel = {
    getAllCategoriess: async () => {
        const [rows] = await pool.query("SELECT * FROM categories");
        return rows;
    },
    getCategories: async () => {
        const [rows] = await pool.query("SELECT * FROM categories");
        return rows;
    },
    createNewCategories: async () => {
        const [rows] = await pool.query("INSERT INTO categories SET ?", [req.body]);
        return rows
    },
    updateOneCategories: () => {
        return;
    },
    deleteOneCategories: () => {
        return;
    }
};

export { CategoriesModel }