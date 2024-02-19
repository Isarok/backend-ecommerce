import { pool } from '../database/BBDD.js';

const CategoriesModel = {
  getAllCategories: async () => {
        const [rows] = await pool.query("SELECT * FROM categories");
        return rows;
    
  },
  getCategory: async (category_Id) => {
      const [rows] = await pool.query("SELECT * FROM categories WHERE category_id = ?", [category_Id]);
      return rows;

  },
  createNewCategory: async (name, user_id) => {
    const [result] = await pool.query('INSERT INTO categories (name, user_id) VALUES (?, ?)', [name, user_id]);
    return { id: result.insertId, name, user_id };
  },
  updateOneCategory: async (category_id, name) => {
        console.log("category_id:", category_id); // Verifica el ID de categoría
        console.log("name:", name); // Verifica el nombre
        const result = await pool.query('UPDATE categories SET name = ? WHERE category_id = ?', [name, category_id]);
        console.log("Query result:", result); // Verifica el resultado de la consulta
        if (result.affectedRows > 0) {
          return { id: category_id, name };
        }
    },

  deleteCategory: async (categoryId) => {
    await pool.query('DELETE FROM categories WHERE category_id = ?', [categoryId]);
  }
};

export  {CategoriesModel};