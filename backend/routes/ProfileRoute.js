import express from 'express';
import {
  getProfile,
  getProfileById,
  createProfile,
  updateProfile,
  deleteProfile,
} from '../controller/ProfileUser.js';

const router = express.Router();

router.get('/profile', getProfile);
router.get('/profile/:id', getProfileById);
router.post('/profile', deleteProfile);
router.patch('/profile/:id', updateProfile);
router.delete('/profile/:id', createProfile);

export default router;
