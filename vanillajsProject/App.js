let movies = [];

// Function to save movies to localStorage
function saveMoviesToLocalStorage() {
  localStorage.setItem('movies', JSON.stringify(movies));
}

// Function to load movies from localStorage
function loadMoviesFromLocalStorage() {
  const savedMovies = JSON.parse(localStorage.getItem('movies'));
  return savedMovies ? savedMovies : [];
}

// Function to render movies on the page
function renderMovies() {
  const movieList = document.querySelector('.movie-list');
  movieList.innerHTML = ''; // Clear current movie list

  if (movies.length === 0) {
    const noMoviesMessage = document.querySelector('.no-movies');
    if (!noMoviesMessage) {
      const message = document.createElement('p');
      message.classList.add('no-movies');
      message.textContent = 'No movies found.';
      movieList.appendChild(message);
    }
  } else {
    const noMoviesMessage = document.querySelector('.no-movies');
    if (noMoviesMessage) {
      noMoviesMessage.remove();
    }
    // Render each movie in the list
    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');
      movieCard.innerHTML = `
        <div class="movie-details">
            <h3>${movie.title}</h3>
            <p>Genre: ${movie.genre}</p>
            <p>Year: ${movie.year}</p>
            <p>IMDB Rating: ${movie.imdbRating}</p>
        </div>
        <button class="delete-btn">Delete</button>
        ${movie.streamingUrl ? `<a href="${movie.streamingUrl}" target="_blank" class="watch-btn">Watch Now</a>` : ''}
      `;
      movieList.appendChild(movieCard);

      // Add delete functionality
      movieCard.querySelector('.delete-btn').addEventListener('click', function() {
        const index = movies.indexOf(movie);
        if (index !== -1) {
          movies.splice(index, 1); // Remove the movie from the array
          saveMoviesToLocalStorage(); // Save the updated array to localStorage
          renderMovies(); // Re-render the updated movie list
        }
      });
    });
  }
}

// Render movies when the page loads
movies = loadMoviesFromLocalStorage(); // Load movies from localStorage
renderMovies(); // Render the list

// Handle adding new movies
document.getElementById('addMovieBtn').addEventListener('click', function() {
  const movieName = document.getElementById('movieName').value;
  const genre = document.getElementById('genre').value;
  const year = document.getElementById('year').value;
  const rating = document.getElementById('rating').value;
  const streamingUrl = document.getElementById('streamingUrl').value;

  // Check if inputs are not empty
  if (movieName && genre && year && rating) {
    const newMovie = {
      title: movieName,
      genre: genre,
      year: parseInt(year),
      imdbRating: parseFloat(rating),
      streamingUrl: streamingUrl || null, // Add streaming URL if provided
    };

    movies.push(newMovie); // Add the new movie to the array
    saveMoviesToLocalStorage(); // Save the updated array to localStorage
    renderMovies(); // Re-render the updated movie list

    // Clear input fields
    document.getElementById('movieName').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('year').value = '';
    document.getElementById('rating').value = '';
    document.getElementById('streamingUrl').value = ''; // Clear the streaming URL input
  } else {
    alert('Please fill in all fields');
  }
});

// Function to filter movies based on search inputs
function searchMovies() {
  const searchName = document.getElementById('searchName').value.toLowerCase();
  const searchGenre = document.getElementById('searchGenre').value.toLowerCase();
  const movieList = document.querySelector('.movie-list');
  const movieCards = movieList.getElementsByClassName('movie-card');

  let foundMovies = false;

  // Loop through all movie cards to filter them
  for (let i = 0; i < movieCards.length; i++) {
    const movieCard = movieCards[i];
    const movieName = movieCard.querySelector('h3').textContent.toLowerCase();
    const movieGenre = movieCard.querySelector('p').textContent.toLowerCase();

    // If movie matches search criteria, display it
    if (
      (movieName.includes(searchName) || searchName === '') &&
      (movieGenre.includes(searchGenre) || searchGenre === '')
    ) {
      movieCard.style.display = ''; // Show movie
      foundMovies = true;
    } else {
      movieCard.style.display = 'none'; // Hide movie
    }
  }

  // Show 'no movies found' message if no movies match the search
  if (!foundMovies) {
    const noMoviesMessage = document.querySelector('.no-movies');
    if (!noMoviesMessage) {
      const message = document.createElement('p');
      message.classList.add('no-movies');
      message.textContent = 'No movies found.';
      movieList.appendChild(message);
    }
  } else {
    const noMoviesMessage = document.querySelector('.no-movies');
    if (noMoviesMessage) {
      noMoviesMessage.remove();
    }
  }
}


document.getElementById('searchName').addEventListener('input', function() {
  searchMovies();
});
document.getElementById('searchGenre').addEventListener('input', function() {
  searchMovies();
});
