import pool from '../models/BBDD.js';

const UsersModel = {
  // Otras funciones del modelo...

  getUserByEmail: async (email) => {
    try {
      const query = 'SELECT * FROM users WHERE email = ?';
      const [user] = await pool.query(query, [email]);
      return user[0];
    } catch (error) {
      console.error("Error al obtener el usuario por email:", error);
      throw new Error("Ocurrió un error al obtener el usuario por email");
    }
  },
  createUser: async (userData) => {
    try {
      const query = 'INSERT INTO users SET ?';
      const result = await pool.query(query, userData);
      return result.insertId;
    } catch (error) {
      console.error("Error al crear un nuevo usuario:", error);
      throw new Error("Ocurrió un error al crear un nuevo usuario");
    }
  }
};

export default UsersModel;