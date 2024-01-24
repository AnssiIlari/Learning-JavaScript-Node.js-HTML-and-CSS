const express = require('express');
const bodyParser = require('body-parser');
const query = require('./db/movies');
const auth = require('./services/authenticate');

const app = express();
app.use(bodyParser.json());

const port = 3000;

process.env.SECRET_KEY = "5b1a3923cc1e1e19523fd5c3f20b409509d3ff9d42710a4da095a2ce285b009f0c3730cd9b8e1af3eb84d";

// Get all movies
app.get("/api/movies", auth.authenticate, query.getAllMovies);

// Get movie by id
app.get("/api/movies/:id", auth.authenticate, query.getMovieById);

// Add a movie
app.post("/api/movies", auth.authenticate, query.addMovie);

// Delete a movie
app.delete("/api/movies/:id", auth.authenticate, query.deleteMovie);

// Update a movie
app.put("/api/movies/:id", auth.authenticate, query.updateMovie);

// Route for authentication
app.post("/login", auth.login);


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});



// for testing purposes
module.exports = app;