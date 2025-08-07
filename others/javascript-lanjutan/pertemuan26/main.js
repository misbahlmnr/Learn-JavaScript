// error handling
// ada 2 error handling
// 1. .then() and .catch()
// 2. try and catch()

const select = (el, all=false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}

const search = select('.btn-search-movies'),
    movieContainer = select('.movie-container'),
    inputKeyword = select('.input-keyword'),
    modalBody = select('.modal-body');

get();

async function get() {
    try {
        let data = await getMoviesBiasa();
        updateUIBiasa(data);
    } catch (e) {
        alert(e)
    }
}

function getMoviesBiasa() {
    return fetch('http://www.omdbapi.com/?apikey=76618eaa&s=avengers')
    .then(response => { 
        if ( !response.ok ) {
            throw new Error(response.statusText)
        }
        return response.json()
    })
    .then(response => { 
        if (response.Response === 'False') {
            throw new Error(response.Error)
        }
        return response.Search 
    });
}

function updateUIBiasa(m) {
    let cards = ``;
    m.forEach(movie => {
        cards += showChards(movie)
    });
    movieContainer.innerHTML = cards;
}

search.addEventListener('click', async function() {
    try {
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies);
    } catch (e) {
        alert(e)
    }
})

function getMovies(keyword) {
    return fetch('https://www.omdbapi.com/?apikey=76618ea&s='+keyword)
        .then(response => { 
            if ( !response.ok ) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(response => { 
            if ( response.Response === "False" ) {
                throw new Error(response.Error);
            }
            return response.Search;
        });
}

function updateUI(m) {
    let cards = ``;
    m.forEach(movie => {
        cards += showChards(movie)
    });
    movieContainer.innerHTML = cards;
}

document.addEventListener('click', async function(e) {
    if (e.target.classList.contains('btn-moviesDetail')) {
        try {
            let imdbid = e.target.dataset.imdbid;
            let detailMovie = await getMoviesDetail(imdbid);
            updateUIDetail(detailMovie)
        } catch (e) {
            alert(e)
        }
    }
})

function getMoviesDetail(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=76618eaa&i='+ imdbid)
        .then(response => { 
            if ( !response.ok ) {
                throw new Error(response.statusText)
            }
            return response.json() 
        })
}

function updateUIDetail(m) {
    let modals = ``;
    modals += showModals(m);
    modalBody.innerHTML = modals;
}

function showChards(m) {
    return `<div class="col-md-3 mb-4">
                <div class="card">
                    <img src="${m.Poster}" class="card-img-top" alt="">
                    <div class="card-body">
                    <h5 class="card-title">${m.Title}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                    <a href="#" class="btn btn-primary btn-moviesDetail" data-bs-toggle="modal" data-bs-target="#buttonModal" data-imdbid="${m.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showModals(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-9">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${m.Title}</h4></li>
                            <li class="list-group-item"><strong>Released : </strong>${m.Released}</li>
                            <li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
                            <li class="list-group-item"><strong>Directors : </strong>${m.Directors}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
                            <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}