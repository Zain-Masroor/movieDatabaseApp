# Movie Database App

## A simple web application built with Node.js that allows users to add, search, and delete movies in a personal movie database. Users can also save and retrieve their movies from localStorage and add streaming URLs to watch movies directly from the app.

### Features

Add Movies: Users can input details such as movie name, genre, year of release, IMDB rating, and a streaming URL.

Movie Cards: Each movie is displayed in a card with movie details and a Watch Now button that redirects to the provided streaming URL.

Persistent Storage: All movies are stored in localStorage, ensuring data persists even after the page is refreshed.

Search Functionality: Users can search for movies by name or genre.

Delete Movies: Movies can be deleted from the database.


### Tech Stack

Frontend: HTML, CSS, JavaScript
Backend: Node.js
Persistence: localStorage for data persistence in the browser
Package Manager: npm
Development Tools: Nodemon for development environment

#### Installation
To run the project locally, follow these steps:

1. Clone the Repository
git clone https://github.com/Zain-Masroor/movieDatabaseApp.git

      cd movieDatabaseApp
  
2. Install Dependencies
Run the following command to install the required dependencies:

      npm install

3. Start the Server
To start the development server with Nodemon (automatically restarts the server on file changes), use the following command:

      npm run dev

This will start the server, and you can access the app in your browser at http://localhost:3000.

Usage
Adding Movies: In the input form, enter details such as movie name, genre, year, IMDB rating, and streaming URL. Click the "Add Movie" button to save the movie to your database.
Viewing Movies: Added movies will appear as cards in the movie list section, with all details displayed.
Search Movies: You can search movies by name or genre using the search inputs above the movie list.
Watch Movies: If a streaming URL is provided, you can click the Watch Now button to be redirected to the movie's streaming platform.
Delete Movies: Click the Delete button to remove a movie from the database.



Folder Structure

MovieDatabaseApp/

├── vanillajsProject/

│   ├── index.html      # The main HTML file containing the structure of the app

│   ├── app.js          # JavaScript file to handle the app logic

│   └── styles.css      # CSS file for styling the app

├── server.js           # Main server file (Node.js)

└── package.json        # Node.js project metadata and dependencies






Local Storage Handling
Movies are saved to localStorage, ensuring they persist even when the page is refreshed or the browser is closed. Data is stored in the browser's local storage as a JSON object and is retrieved whenever the app is loaded.


Contributing
Fork this repository.
Create a new branch for your changes (git checkout -b feature-name).
Make your changes and commit (git commit -am 'Add new feature').
Push to the branch (git push origin feature-name).
Create a new Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.





Acknowledgments
Node.js: Used for creating the backend server.
localStorage: For saving movie data persistently.
Nodemon: For automatically restarting the server during development.
