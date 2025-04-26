import { model, Schema } from "mongoose";

// write a schema for movies
const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
});

// Create a model for movies
const MovieModel = model("Movie", MovieSchema);

export default MovieModel;
