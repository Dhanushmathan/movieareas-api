import express from 'express';
import { MovieCreate, MovieDelete, MovieDetails, MovieIndex, MovieUpdate } from '../controllers/movieController.js';

const router = express.Router();

// R - For READING movies
router.get('/', MovieIndex);

router.get('/:id', MovieDetails);

// C - For CREATING movies
router.post('/', MovieCreate);

// U - For UPDATING movies
router.put('/:id', MovieUpdate);

// D - For DELETING movies
router.delete('/:id', MovieDelete);

export default router;