import MovieModel from "../models/moviesModel.js";

export const MovieIndex = (req, res) => {
    res.send('Get all movies');
};

export const MovieCreate = async (req, res) => {

    // Validate the request body
    const newMovie = new MovieModel({
        title: req.body.title,
        description: req.body.desc
    });

    // Check if the movie was saved successfully
    try {
        const movie = await newMovie.save();
        return res.status(201).json(movie);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }

};

export const MovieUpdate = (req, res) => {
    res.send(`Update movie with ID ${req.params.id}`);
};

export const MovieDelete = (req, res) => {
    res.send(`Delete movie with ID: ${req.params.id}`);
};

export const movieDetails = [
    {
        title: 'Inception',
        desc: 'A mind-bending thriller by Christopher Nolan about dreams within dreams.'
    }, 
    {
        title: 'The Matrix',
        desc: 'A hacker discovers the reality he lives in is a simulated reality.'
    },
    {
        title: 'Interstellar',
        desc: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
    }, 
    {
        title: 'The Dark Knight',
        desc: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.'
    }, 
    {
        title: 'Pulp Fiction',
        desc: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
    }
];
