import { pool } from'../database/BBDD.js';

const Role = {
  getAll: async function() {
    const roles = await pool.query('SELECT * FROM roles');
    return roles;
  },
  getById: async function(roleId) {
    const role = await pool.query('SELECT * FROM roles WHERE role_id = ?', [roleId]);
    return role[0];
  },
  create: async function(name) {
    const result = await pool.query('INSERT INTO roles (name) VALUES (?)', [name]);
    return result.insertId;
  },
  update: async function(roleId, name) {
    const result = await pool.query('UPDATE roles SET name = ? WHERE role_id = ?', [name, roleId]);
    return result.affectedRows;
  },
  delete: async function(roleId) {
    const result = await pool.query('DELETE FROM roles WHERE role_id = ?', [roleId]);
    return result.affectedRows;
  }
};
export {Role};