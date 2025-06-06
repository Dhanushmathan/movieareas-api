import express from 'express';
import router from './routes/moviesRoute.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

const app = express();
const PORT = 3000;

// Data understanding or parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));    // postman urlencoded data

// dotenv
dotenv.config();

// Connect DataBase
connectDB();

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

// CRUD Functionality of movies
app.use('/movies', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
