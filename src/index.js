import "regenerator-runtime";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.slim.js";
import './list-movies.js';
import './nav-bar.js';

window.addEventListener('load', () => {
    getMovies();

    const header = document.querySelector(header);
    document.createElement('nav-bar');
});

const randomPage = () => {
    return Math.ceil(Math.random() * 1);
}

async function getMovies() {
    const apiKey = "c12632f79644c69941c8cbd6098d8491"
    const response = await fetch(`https://api.themoviedb.org/4/list/3?page=${randomPage()}&api_key=${apiKey}`)
    const json = await response.json();

    const main = document.querySelector('.row');

    json.results.forEach(movie => {
        const element = document.createElement('list-movies');
        element.movie = movie;
        main.appendChild(element);
    });
}