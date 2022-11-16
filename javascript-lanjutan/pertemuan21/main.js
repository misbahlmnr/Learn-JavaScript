// $.ajax({
//     url: 'http://www.omdbapi.com/?apikey=76618eaa&s=avengers',
//     success: result => {
//         const movies = result.Search;
//         let cards = ``;
//         movies.forEach(m => {
//             cards += showChards(m)
//         });
//         $('.movie-container').html(cards)

//         // pada saat tombol show details di click
//         $('.btn-moviesDetail').on('click', function() {
//             $.ajax({
//                 url: 'http://www.omdbapi.com/?apikey=76618eaa&i='+$(this).data('imdbid'),
//                 success: m => {
//                     let modal = showModals(m);
//                     $('.modal-body').html(modal);
//                 },
//                 error: e => console.log(e)
//             })
//         })
//     },
//     error: e => console.log(e)
// })

// $('.btn-search-movies').on('click', function() {
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=76618eaa&s='+$('.input-keyword').val(),
//         success: result => {
//             const movies = result.Search;
//             let cards = ``;
//             movies.forEach(m => {
//                 cards += showChards(m)
//             });
//             $('.movie-container').html(cards)

//             // pada saat tombol show details di click
//             $('.btn-moviesDetail').on('click', function() {
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=76618eaa&i='+$(this).data('imdbid'),
//                     success: m => {
//                         let modal = showModals(m);
//                         $('.modal-body').html(modal);
//                     },
//                     error: e => console.log(e)
//                 })
//             })
//         },
//         error: e => console.log(e)
//     })
// })

// remake

// fetch('http://www.omdbapi.com/?apikey=76618eaa&s=avengers')
//     .then(result => result.json())
//     .then(result => {
//         let movies = result.Search;
//         let cards = ``;
//         movies.forEach(m => cards += showChards(m));
//         const movieContainer = document.querySelector('.movie-container');
//         movieContainer.innerHTML = cards;

//         const btnDetail = document.querySelectorAll('.btn-moviesDetail');
//         btnDetail.forEach(b => b.addEventListener('click', function() {
//             let imdbid = this.dataset.imdbid;
//             fetch('http://www.omdbapi.com/?apikey=76618eaa&i='+imdbid)
//                 .then(result => result.json())
//                 .then(result => {
//                     let modals = ``;
//                     modals += showModals(result);
//                     let modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = modals;
//                 });
//         }));
//     });

// const btnSearch = document.querySelector('.btn-search-movies');
// const inputSearch = document.querySelector('.input-keyword');
// btnSearch.addEventListener('click', function() {
//     fetch('http://www.omdbapi.com/?apikey=76618eaa&s='+inputSearch.value)
//         .then(result => result.json())
//         .then(result => {
//             let movies = result.Search;
//             let cards = ``;
//             movies.forEach(m => cards += showChards(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             const btnDetail = document.querySelectorAll('.btn-moviesDetail');
//             btnDetail.forEach(b => b.addEventListener('click', function() {
//             let imdbid = this.dataset.imdbid;
//             fetch('http://www.omdbapi.com/?apikey=76618eaa&i='+imdbid)
//                 .then(result => result.json())
//                 .then(result => {
//                     let modals = ``;
//                     modals += showModals(result);
//                     let modalBody = document.querySelector('.modal-body');
//                     modalBody.innerHTML = modals;
//                 });
//         }));
//         });
// })

const btnSearch = document.querySelector(".btn-search-movies"),
  inputSearch = document.querySelector(".input-keyword"),
  movieContainer = document.querySelector(".movie-container"),
  modalBody = document.querySelector(".modal-body");

get();
async function get() {
  try {
    let data = await getMoviesBiasa();
    updateUI(data);
  } catch (e) {
    console.error(e);
  }
}

btnSearch.addEventListener("click", async function () {
  try {
    let data = await getMovies(inputSearch.value);
    updateUI(data);
  } catch (e) {
    console.error(e);
  }
});

document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("btn-moviesDetail")) {
    let imdbid = e.target.dataset.imdbid;
    try {
      let moviesDetail = await getMoviesDetail(imdbid);
      updateUIDetail(moviesDetail);
    } catch (e) {
      console.error(e);
    }
  }
});

function updateUIDetail(movies) {
  let modals = ``;
  modals += showModals(movies);
  let modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = modals;
}

function getMoviesDetail(imdbid) {
  return fetch("http://www.omdbapi.com/?apikey=76618eaa&i=" + imdbid)
    .then((result) => {
      if (!result.status === 200) {
        throw new Error(result.statusText);
      }
      return result.json();
    })
    .then((result) => {
      if (result.Response === "False") {
        throw new Error(result.statusText);
      }
      return result;
    });
}

function getMoviesBiasa() {
  return fetch("http://www.omdbapi.com/?apikey=76618eaa&s=avengers")
    .then((result) => {
      if (!result.status === 200) {
        throw new Error(result.statusText);
      }
      return result.json();
    })
    .then((result) => {
      if (result.Response === "False") {
        throw new Error(result.statusText);
      }
      return result.Search;
    });
}

function getMovies(keyword) {
  return fetch("http://www.omdbapi.com/?apikey=76618eaa&s=" + keyword)
    .then((result) => {
      if (!result.status === 200) {
        throw new Error(result.statusText);
      }
      return result.json();
    })
    .then((result) => {
      if (result.Response === "False") {
        throw new Error(result.Error);
      }
      return result.Search;
    });
}

function updateUI(movies) {
  let cards = ``;
  movies.forEach((m) => (cards += showChards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
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
