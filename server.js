const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory movie store (acts as the local storage)
let movies = [];

// Serve static files (CSS, JS, images) from the 'frontend' directory
app.use(express.static(path.join(__dirname, 'vanillajsProject')));

// Route to serve the index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'vanillajsProject', 'index.html'));
});

// Route to get all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// Route to add a new movie
app.post('/movies', (req, res) => {
  const { title, genre, year, imdbRating } = req.body;
  
  // Add new movie to the array
  const newMovie = { title, genre, year: parseInt(year), imdbRating: parseFloat(imdbRating) };
  movies.push(newMovie);

  // Send back the updated movie list
  res.json(movies);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
