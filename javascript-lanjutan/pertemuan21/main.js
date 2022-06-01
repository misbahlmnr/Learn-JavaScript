$.ajax({
    url: 'http://www.omdbapi.com/?apikey=76618eaa&s=avengers',
    success: result => {
        const movies = result.Search;
        let cards = ``;
        movies.forEach(m => {
            cards += showChards(m)
        });
        $('.movie-container').html(cards)

        // pada saat tombol show details di click
        $('.btn-moviesDetail').on('click', function() {
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=76618eaa&i='+$(this).data('imdbid'),
                success: m => {
                    let modal = showModals(m);
                    $('.modal-body').html(modal);
                },
                error: e => console.log(e)
            })
        })
    },
    error: e => console.log(e)
})

$('.btn-search-movies').on('click', function() {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=76618eaa&s='+$('.input-keyword').val(),
        success: result => {
            const movies = result.Search;
            let cards = ``;
            movies.forEach(m => {
                cards += showChards(m)
            });
            $('.movie-container').html(cards)
    
            // pada saat tombol show details di click
            $('.btn-moviesDetail').on('click', function() {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=76618eaa&i='+$(this).data('imdbid'),
                    success: m => {
                        let modal = showModals(m);
                        $('.modal-body').html(modal);
                    },
                    error: e => console.log(e)
                })
            })
        },
        error: e => console.log(e)
    })
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

