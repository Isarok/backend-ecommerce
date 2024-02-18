import { pool } from "../database/BBDD.js";

const UserModel = {
  getAllUsers: async () => {
    try {
      const query = 'SELECT * FROM users';
      const [users] = await pool.query(query);
      return users;
    } catch (error) {
      throw new Error("Error al obtener los usuarios");
    }
  },
  getUserById: async (userId) => {
    try {
      const query = 'SELECT * FROM users WHERE user_id = ?';
      const [user] = await pool.query(query, [userId]);
      return user[0];
    } catch (error) {
      throw new Error("Error al obtener el usuario por ID");
    }
  },
  createUser: async (userData) => {
    const { name, email, password, role_id, is_active} = userData;
    if (!name || !email || !password || !role_id || !is_active) {
      throw new Error("Los campos name, email, password y role_id son obligatorios");
    }
  
    try {
      const [result] = await pool.query('INSERT INTO users SET ?', [userData]);
      
      return result.insertId;
      
    } catch (error) {
      throw new Error("Error al crear un nuevo usuario");
    }
  },
  updateUserRole: async (userId, roleId) => {
    try {
      const query = 'UPDATE users SET role_id = ? WHERE user_id = ?';
      const result = await pool.query(query, [roleId, userId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error("Error al actualizar el rol del usuario");
    }
  },
  deleteUser: async (userId) => {
    try {
      const query = 'DELETE FROM users WHERE user_id = ?';
      const result = await pool.query(query, [userId]);
      return result.affectedRows > 0;
    } catch (error) {
      throw new Error("Error al borrar el usuario");
    }
  }
};

export { UserModel };