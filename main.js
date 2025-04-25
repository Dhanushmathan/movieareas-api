import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
})


// CRUD Functionality of movies

// R - For READING movies
app.get('/movies', (req, res) => {});

// C - For CREATING movies
app.post('/movies', (req, res) => {});

// U - For UPDATING movies
app.put('/movies/:id', (req, res) => {});

// D - For DELETING movies
app.delete('/movies/:id', (req, res) => {});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
