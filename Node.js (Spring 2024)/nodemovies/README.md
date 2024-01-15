# REST Basics with Node.js and Express

## Overview
This project is an introductory guide to building RESTful APIs using Node.js and Express. It provides basic functionality to manage a simple movie database.

## Features
- **List All Movies**: Fetch a list of all movies.
- **Get Movie by ID**: Retrieve details of a specific movie by its ID.
- **Add New Movie**: Add a new movie to the database.
- **Update Movie Details**: Modify details of an existing movie.
- **Delete Movie**: Remove a movie from the database.

## Installation
1. Clone the repository
2. Install dependencies
3. Start the server

## Usage
The server runs on `localhost:3000`. The following endpoints are available:

- `GET /api/movies`: Get all movies.
- `GET /api/movies/:id`: Get a movie by ID.
- `POST /api/movies`: Add a new movie. Requires movie data in request body.
- `PUT /api/movies/:id`: Update an existing movie. Requires updated movie data in request body.
- `DELETE /api/movies/:id`: Delete a movie by ID.