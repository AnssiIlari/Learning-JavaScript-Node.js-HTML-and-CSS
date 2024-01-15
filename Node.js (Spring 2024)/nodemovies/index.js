const express = require('express');

const app = express();
app.use(express.json());

const port = 3000;

let movies = [
    { id: '1588323375416', title: 'Star Wars: Episode IX - The Rise of Skywalker', year: 2019, director: 'J.J. Abrams' },
    { id: '1588323390624', title: 'The Irishman', year: 2019, director: 'Martin Scorsese' },
    { id: '1588323412643', title: 'Harry Potter and the Sorcerers Stone', year: 2001, director: 'Chris Columbus' }
];

// Fetch all movies, GET
app.get("/api/movies", (req, res) => {
    res.json(movies);
})

// Fetch a movie by id, GET
app.get("/api/movies/:id", (req, res) => {
    // Get the id from the request
    const movieid = req.params.id;
    // Find the movie in the array movies
    const movie = movies.filter(movie => movie.id === movieid);

    // If movie is found return the movie else return 404
    if (movie.length > 0)
        res.json(movie);
    else
        res.status(404).end();
})

// Add new movie, POST
app.post("/api/movies", (req, res) => {
    // Extract movie from the request body and generate id
    const newMovie = { 'id': Date.now().toString(), ...req.body };

    // Add new movie at the end of the movies array
    movies = [...movies, newMovie];

    res.json(newMovie);
});

//Delete movie, DELETE
app.delete("/api/movies/:id", (req, res) => {
    const id = req.params.id;
    movies = movies.filter(movie => movie.id !== id);
    // 204 === No Content
    res.status(204).end();
})

// Update movie, mutates the original array, PUT
app.put("/api/movies/:id", (req, res) => {
    const id = req.params.id;
    const updatedMovie = { 'id': id, ...req.body };

    //Get the index of updated movie
    const index = movies.findIndex(movie => movie.id === id);
    //Replace updated movie in the array
    movies.splice(index, 1, updatedMovie);

    // return updated movie
    res.json(updatedMovie);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});