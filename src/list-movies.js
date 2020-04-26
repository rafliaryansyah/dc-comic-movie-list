class ListMovies extends HTMLElement {
    constructor() {
        super();
        // this.root = this.attachShadow({ mode: 'open'});
    }

    set movie(movie) {
        this.innerHTML = `
                        
                        <div class="card mt-5 mb-3 ml-2" style="max-width: 600px;">
                          <div class="row no-gutters">
                            <div class="col-md-4">
                              <img src="http://image.tmdb.org/t/p/w300/${movie.poster_path}" class="card-img" style="width: 200px" alt="...">
                            </div>
                            <div class="col-md-8">
                              <div class="card-body">
                                <h5 class="card-title">${movie.original_title}</h5>
                                <p class="card-text">${movie.overview}</p>
                                <p class="card-text"><small class="text-muted">${movie.release_date} | ${movie.media_type} | ${movie.original_language} | Average Rating : ${movie.vote_average}</small></p>
                              </div>
                            </div>
                          </div>
                        </div>`
    }
}

customElements.define("list-movies", ListMovies);