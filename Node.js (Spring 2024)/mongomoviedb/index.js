const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/', routes);

// from .env
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const port = process.env.PORT;

// MongoDB connection
const mongoURL = `mongodb+srv://${username}:${password}@cluster0.1ohinap.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoURL, { dbName: 'moviedb'});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});