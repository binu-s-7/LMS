import express from 'express';
import {
    getAllLanguages, createLanguage
} from '../controllers/languageController.js';

const router = express.Router();

router.get('/', getAllLanguages);
router.post('/', createLanguage);


export default router;
