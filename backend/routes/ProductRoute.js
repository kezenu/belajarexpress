import express from 'express';
import {
  getProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controller/Product.js';

const router = express.Router();

router.get('/Product', getProduct);
router.get('/Product/:id', getProductById);
router.post('/Product', deleteProduct);
router.patch('/Product/:id', updateProduct);
router.delete('/Product/:id', createProduct);

export default router;
