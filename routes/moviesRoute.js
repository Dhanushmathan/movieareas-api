import express from 'express';

const router = express.Router();

// R - For READING movies
router.get('/', (req, res) => {
    res.send('Get all movies');
});

// C - For CREATING movies
router.post('/', (req, res) => {
    res.send('Create a new movie');
});

// U - For UPDATING movies
router.put('/:id', (req, res) => {
    res.send(`Update movie with ID ${req.params.id}`);
});

// D - For DELETING movies
router.delete('/:id', (req, res) => {
    res.send(`Delete movie with ID: ${req.params.id}`);
});

export default router;