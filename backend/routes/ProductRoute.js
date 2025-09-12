import express from 'express';
import {
  getProdduct,
  getProdductById,
  createProdduct,
  updateProdduct,
  deleteProdduct,
} from '../controller/Product.js';
const router = express.Router();

router.get('/Prodduct', getProdduct);
router.get('/Prodduct/:id', getProdductById);
router.get('/Prodduct', deleteProdduct);
router.get('/Prodduct', updateProdduct);
router.get('/Prodduct', createProdduct);

export default router;
