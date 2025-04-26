import MovieModel from "../models/moviesModel.js";

export const MovieIndex = async (req, res) => {
    try {
        const movies = await MovieModel.find();
        return res.status(200).json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
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

export const MovieDetails = async (req, res) => {
    try {
        const movie = await MovieModel.findById(req.params.id);

        if (movie === null) {
            return res.status(404).json({ message: "Cannot find movie" });
        } else {
            return res.json(movie);
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const MovieUpdate = async (req, res) => {
    try {
        const updateMovie = await MovieModel.findOneAndUpdate(
            { _id: req.params.id },
            { title: req.body.title, description: req.body.description },
            { new: true }
        );
        return res.status(200).json(updateMovie);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const MovieDelete = async (req, res) => {
    try {
        const deletedMovie = await MovieModel.findByIdAndDelete({ _id: req.params.id });
        if (!deletedMovie) {
            return res.status(404).json({ message: "Cannot find movie" });
        }
        return res.json({ message: "Movie deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
