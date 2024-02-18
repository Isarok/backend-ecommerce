import { pool } from '../database/BBDD.js';

const CategoriesModel = {
  getAllCategories: async () => {
    try {
        const [rows] = await pool.query("SELECT * FROM categories");
        return rows;
    } catch (error) {
        // Aquí puedes manejar el error, ya sea registrándolo, enviando una respuesta específica, o realizando cualquier otra acción necesaria.
        console.error("Error al obtener todos los categories:", error);
        throw new Error("Ocurrió un error al obtener los categories");
    }
  },
  getCategory: async (category_Id) => {
    try {
      const [rows] = await pool.query("SELECT * FROM categories WHERE category_id = ?", [category_Id]);
      return rows;
    } catch (error) {
      console.error("Error al obtener la categoría:", error);
      throw new Error("Ocurrió un error al obtener la categoría");
    }
  },
  createNewCategory: async (name, user_id) => {
    const [result] = await pool.query('INSERT INTO categories (name, user_id) VALUES (?, ?)', [name, user_id]);
    return { id: result.insertId, name, user_id };
  },
    updateOneCategory: async (category_id, name) => {
      try {
        console.log("category_id:", category_id); // Verifica el ID de categoría
        console.log("name:", name); // Verifica el nombre
        const result = await pool.query('UPDATE categories SET name = ? WHERE category_id = ?', [name, category_id]);
        console.log("Query result:", result); // Verifica el resultado de la consulta
        if (result.affectedRows > 0) {
          return { id: category_id, name };
        }
      } catch (error) {
        console.error("Error al actualizar la categoría:", error);
        throw new Error("Ocurrió un error al actualizar la categoría");
      }
    },

  deleteCategory: async (categoryId) => {
    await pool.query('DELETE FROM categories WHERE category_id = ?', [categoryId]);
  }
};

export  {CategoriesModel};