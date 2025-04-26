export const MovieIndex = (req, res) => {
    res.send('Get all movies');
};

export const MovieCreate = (req, res) => {
    console.log(req.body);

    return res.json(req.body);

};

export const MovieUpdate = (req, res) => {
    res.send(`Update movie with ID ${req.params.id}`);
};

export const MovieDelete = (req, res) => {
    res.send(`Delete movie with ID: ${req.params.id}`);
};

const movieDetails = {
    title: 'Christopher Nolan',
    desc: 'Inception'
};
