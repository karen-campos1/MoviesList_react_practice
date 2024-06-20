import React, { useState } from 'react';
import './MoviesList.css';

function MoviesList() {
    const [showMovies, setShowMovies] = useState(false);
    const [movies, setMovies] = useState([
        {
            title: "Mean Girls",
            genre: "Comedy",
            description: "Description: A teenager moves to a new high school where she becomes friends with the popular but manipulative girls known as 'The Plastics'.",
            showDetails: false, // Initialize showDetails to false
            image: "https://musicart.xboxlive.com/7/88fe5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        },
        { 
            title: "Pulp Fiction",
            genre: "Thriller",
            description: "Description: The lives of two mob hit-men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
            showDetails: false,
            image: "https://musicart.xboxlive.com/7/767c6300-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" 
        },
        { 
            title: "Step Brothers", 
            genre: "Comedy", 
            description: "Description: Two middle-aged, lazy, and unemployed men become step brothers when their single parents marry each other.",
            showDetails: false, 
            image: "https://m.media-amazon.com/images/M/MV5BODViZDg3ZjYtMzhiYS00YTVkLTk4MzktYWUxMTlkYjc1NjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
        },
        { 
            title: "The Conjuring", 
            genre: "Horror", 
            description: "Description: Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
            showDetails: false, 
            image: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg"
        },
        { 
            title: "American Psycho", 
            genre: "Thriller", 
            description: "Description: A wealthy New York City investment banking executive hides his alternate psychopathic ego from his co-workers and friends.",
            showDetails: false,
            image: "https://m.media-amazon.com/images/I/81Ic5ukij2L._AC_UF894,1000_QL80_.jpg"
        }
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null);
    const [filter, setFilter] = useState("All"); // State to manage the current filter


    // Handle dropdown change
    function handleMovieChange(event) {
        const selectedTitle = event.target.value;
        const movie = movies.find(film => film.title === selectedTitle);
        setSelectedMovie(movie);
    };

    // Function to toggle the details of the selected movie
    function toggleDetails(index) {
        const newMovies = [...movies];
        newMovies[index].showDetails = !newMovies[index].showDetails;
        setMovies(newMovies);
    };

    // Function to remove a selected movie from the list
    function removeMovie(index) {
        const newMovies = movies.filter((element, i) => i !== index);
        setSelectedMovie(null); // this is going to clear the movie out if it's selected to be removed
        setMovies(newMovies);
    }

 // Function to toggle the filter between showing all movies and only showing comedies
 function toggleFilter() {
    setFilter(prevFilter => (prevFilter === "All" ? "Comedy" : "All"));
}

// Filtered movies based on the current filter
const filteredMovies = filter === "All" ? movies : movies.filter(movie => movie.genre === "Comedy");

return (
    <div>
        <h1 className="menu-title">Choose a Movie:</h1>
        <button onClick={toggleFilter}>
            {filter === "All" ? "Show Only Comedies" : "Show All Movies"}
        </button>
        <select onChange={handleMovieChange}>
            <option value="">Select a Movie</option>
            {filteredMovies.map((movie, index) => (
                <option key={index} value={movie.title}>{movie.title}</option>
            ))}
        </select>

        {selectedMovie && (
            <div className="card" id="show-movie">
                <h2 className="card-title">{selectedMovie.title}</h2>
                <img src={selectedMovie.image} alt={selectedMovie.title} className="card-image"/>
                <p className="card-genre"><strong>Genre:</strong> {selectedMovie.genre}</p>
                <button className="card-button" onClick={() => toggleDetails(movies.indexOf(selectedMovie))}>
                    {selectedMovie.showDetails ? 'Hide Details' : 'Show Details'}
                </button>
                <button className="card-button" onClick={() => removeMovie(movies.indexOf(selectedMovie))}>Remove</button>
                {selectedMovie.showDetails && <p className="card-description">{selectedMovie.description}</p>}
            </div>
        )}
    </div>
);
}

export default MoviesList;