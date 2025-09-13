import express from 'express';
import {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
} from '../controller/Users.js';
const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:uuid', getUsersById);
router.post('/users', createUsers);
router.patch('/users/:uuid', updateUsers);
router.delete('/users/:uuid', deleteUsers);

export default router;
