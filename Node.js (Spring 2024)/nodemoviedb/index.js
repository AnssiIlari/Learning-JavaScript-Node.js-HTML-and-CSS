const express = require('express');
const bodyParser = require('body-parser');
const query = require('./db/movies');

const app = express();
app.use(bodyParser.json());

const port = 3000;

// Get all movies
app.get("/api/movies", query.getAllMovies);

// Get movie by id
app.get("/api/movies/:id", query.getMovieById);

// Add a movie
app.post("/api/movies", query.addMovie);

// Delete a movie
app.delete("/api/movies/:id", query.deleteMovie);

// Update a movie
app.put("/api/movies/:id", query.updateMovie);


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});