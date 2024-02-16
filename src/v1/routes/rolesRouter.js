import express from 'express';
import RolesModel from '../models/rolesModel.js';

const router = express.Router();

router.get('/roles', async (req, res) => {
  try {
    const roles = await RolesModel.getAllRoles();
    res.json(roles);
  } catch (error) {
    console.error("Error al obtener los roles:", error);
    res.status(500).send('Ocurrió un error al obtener los roles');
  }
});

export default router;