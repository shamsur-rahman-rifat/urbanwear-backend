import express from 'express';
import { getCollections, createCollection } from '../controllers/collectionController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').get(getCollections).post(protect, admin, createCollection);

export default router;
