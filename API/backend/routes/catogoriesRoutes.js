import express from 'express';
import {
    createCategory, getAllCategories
} from '../controllers/catogoriesController.js';

const router = express.Router();

router.get('/', getAllCategories);
router.post('/', createCategory);


export default router;
