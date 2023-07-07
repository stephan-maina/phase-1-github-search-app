const movies = [
    {
      "movies": [
        {
          "id": "1",
          "title": "The Exorcist",
          "runtime": "122",
          "capacity": 50,
          "showtime": "06:00PM",
          "tickets_sold": 25,
          "description": "A young girl is possessed by a demon.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        },
        {
          "id": "2",
          "title": "The Shining",
          "runtime": "144",
          "capacity": 50,
          "showtime": "07:30PM",
          "tickets_sold": 35,
          "description": "A family moves into a haunted hotel.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        },
        {
          "id": "3",
          "title": "Psycho",
          "runtime": "109",
          "capacity": 50,
          "showtime": "09:00PM",
          "tickets_sold": 40,
          "description": "A young woman is murdered by a motel owner.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        },
        {
          "id": "4",
          "title": "Halloween",
          "runtime": "91",
          "capacity": 50,
          "showtime": "10:30PM",
          "tickets_sold": 45,
          "description": "A serial killer stalks and murders teenagers on Halloween night.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        },
        {
          "id": "5",
          "title": "The Texas Chain Saw Massacre",
          "runtime": "83",
          "capacity": 50,
          "showtime": "06:00PM",
          "tickets_sold": 30,
          "description": "A group of friends are terrorized by a cannibal family.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        },
        {
          "id": "6",
          "title": "Night of the Living Dead",
          "runtime": "96",
          "capacity": 50,
          "showtime": "07:30PM",
          "tickets_sold": 35,
          "description": "A group of people are trapped in a farmhouse during a zombie apocalypse.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        },
        {
          "id": "7",
          "title": "The Blair Witch Project",
          "runtime": "81",
          "capacity": 50,
          "showtime": "08:00PM",
          "tickets_sold": 45,
          "description": "Three student filmmakers go missing in the woods while making a documentary about a local legend.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        },
        {
          "id": "8",
          "title": "Scream",
          "runtime": "111",
          "capacity": 50,
          "showtime": "07:00PM",
          "tickets_sold": 30,
          "description": "A young woman is stalked and murdered by a serial killer who wears a Ghostface mask.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        },
        {
          "id": "9",
          "title": "Friday the 13th",
          "runtime": "95",
          "capacity": 50,
          "showtime": "09:30PM",
          "tickets_sold": 40,
          "description": "A group of teenagers are stalked and murdered by a hockey-masked killer at a summer camp.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        },
        {
          "id": "10",
          "title": "A Nightmare on Elm Street",
          "runtime": "91",
          "capacity": 50,
          "showtime": "11:00PM",
          "tickets_sold": 45,
          "description": "A group of teenagers are stalked and murdered in their dreams by a burned man with a clawed glove.",
          "poster": "https://www.gstatic.com/tv/thumb/v22vodart/1466/p1466_v_v8_ab.jpg"
        }
      ]
    }
  ];
  
  // Function to filter movies based on search criteria
  const searchMovies = (movie, year) => {
    // Perform search logic here, filtering the movies array based on the provided criteria
    // For simplicity, let's assume we are searching by movie title
    const filteredMovies = movies[0].movies.filter(m => m.title.toLowerCase().includes(movie.toLowerCase()));
    return filteredMovies;
  };
  
  // Function to render movie listings in the container
  const renderMovieListings = movies => {
    const movieListContainer = document.getElementById('movie-list-container');
  
    // Generate HTML for movie listings
    const movieListHTML = movies
      .map(
        movie => `
          <div class="movie-item">
            <img class="movie-poster" src="${movie.poster}" alt="${movie.title}">
            <h2 class="movie-title">${movie.title}</h2>
            <p class="movie-description">${movie.description}</p>
            <p class="movie-showtime">Showtime: ${movie.showtime}</p>
            <p class="movie-capacity">Capacity: ${movie.capacity}</p>
            <p class="movie-tickets-sold">Tickets Sold: ${movie.tickets_sold}</p>
          </div>
        `
      )
      .join('');
  
    // Render movie listings in the container
    movieListContainer.innerHTML = `<div class="movie-list">${movieListHTML}</div>`;
  };
  
  // Event listener for search form submission
  const searchForm = document.getElementById('search-form');
  searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const movieInput = document.getElementById('movie');
    const yearInput = document.getElementById('year');
    const movie = movieInput.value.trim();
    const year = yearInput.value.trim();
  
    // Perform search and render the movie listings
    const searchResults = searchMovies(movie, year);
    renderMovieListings(searchResults);
  
    // Clear the input fields
    movieInput.value = '';
    yearInput.value = '';
  });
  
  // Initial rendering of movie listings
  renderMovieListings(movies[0].movies);
  