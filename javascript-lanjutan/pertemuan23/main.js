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
    modalBody = select('.modal-body')

fetch('http://www.omdbapi.com/?apikey=76618eaa&s=avengers')
    .then(response => response.json())
    .then(response => {
        let movies = response.Search;
        let cards = ``;
        movies.forEach(movie => {
            cards += showChards(movie)
        });
        movieContainer.innerHTML = cards;

        let detail = select('.btn-moviesDetail', true);
        
        detail.forEach(d => {
            d.addEventListener('click', function() {
                let imdbID = this.dataset.imdbid;
                fetch('http://www.omdbapi.com/?apikey=76618eaa&i='+ imdbID)
                    .then(response => response.json())
                    .then(movie => {
                        let modals = ``;
                        modals += showModals(movie);
                        modalBody.innerHTML = modals;
                    })
                    .catch(response => console.log(response))
            })
        })

    })
    .catch(response => console.log(response))

search.addEventListener('click', function() {
    fetch('http://www.omdbapi.com/?apikey=76618eaa&s='+ inputKeyword.value)
        .then(response => response.json())
        .then(response => {
            let movies = response.Search;
            let cards = ``;
            movies.forEach(movie => {
                cards += showChards(movie)
            });
            movieContainer.innerHTML = cards;

            let detail = select('.btn-moviesDetail', true);
        
            detail.forEach(d => {
                d.addEventListener('click', function() {
                    let imdbID = this.dataset.imdbid;
                    fetch('http://www.omdbapi.com/?apikey=76618eaa&i='+ imdbID)
                        .then(response => response.json())
                        .then(movie => {
                            let modals = ``;
                            modals += showModals(movie);
                            modalBody.innerHTML = modals;
                        })
                        .catch(response => console.log(response))
                })
            })
        })
        .catch(response => console.log(response))
})





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