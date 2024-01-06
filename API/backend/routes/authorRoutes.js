import express from 'express';
import {
    createAuthor, getAllAuthors
} from '../controllers/authorsController.js';

const router = express.Router();

router.get('/', getAllAuthors);
router.post('/', createAuthor);


export default router;
