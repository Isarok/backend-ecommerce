import { pool } from "../../database/BBDD.js";

const UsersModel = {
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
    try {
      const query = 'INSERT INTO users SET ?';
      const result = await pool.query(query, userData);
      return result.insertId;
    } catch (error) {
      throw new Error("Error al crear un nuevo usuario");
    }
  },
  updateUserRole: async (userId, newRoleId) => {
    try {
      const query = 'UPDATE users SET role_id = ? WHERE user_id = ?';
      const result = await pool.query(query, [newRoleId, userId]);
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

export default UsersModel;