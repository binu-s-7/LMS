import express from 'express';
import {
    createItem, updateItem, getItemById, deleteItemById, getAllItems
} from '../controllers/itemController.js';

const router = express.Router();

router.get('/', getAllItems);
router.post('/', createItem);
router.get('/item/:id', getItemById);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItemById);


export default router;
