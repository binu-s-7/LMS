import express from 'express';
import {
    createPublisher, getAllPublisher
} from '../controllers/publisherController.js';

const router = express.Router();

router.get('/', getAllPublisher);
router.post('/', createPublisher);


export default router;
