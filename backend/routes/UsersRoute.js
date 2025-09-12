import express from 'express';
import {
  getUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
} from '../controller/Users';
const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.get('/users', deleteUsers);
router.get('/users', updateUsers);
router.get('/users', createUsers);

export default router;
