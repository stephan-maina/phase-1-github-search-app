# TRENDING MOVIE FILMS
* A web application that displays a list of trending movies. Users can search for movies by title and optionally specify a year. The application provides movie details such as runtime, capacity, showtime, tickets sold, and a brief description.

# MOVIE LISTING # (Sub-title)

# Features

* Display a list of trending movies with their details.
* Search for movies by title and optionally specify a year.
* Automatically update the movie listings based on the search criteria.
* Clear the search form after submission.

# Technologies Used;

HTML
CSS
JavaScript

# Usage

* Clone the repository:
bash-Copy code
(git clone <repository_url>)
* Open the index.html file in a web browser.
* In the web application, you will see a list of trending movies.
* To search for a movie, enter the movie title and optionally the year in the search form.
* Click the "Submit" button to perform the search.
* The movie listings will be updated to display the search results matching the provided criteria.
* The input fields will be cleared for the next search.

# Data Structure

* The movie data is stored in the movies array in JavaScript. Each movie object has the following properties:

-> id (string): Unique identifier for the movie.
-> title (string): The title of the movie.
-> runtime (string): The duration of the movie in minutes.
-> capacity (number): The maximum capacity of the movie theater.
-> showtime (string): The time at which the movie is being shown.
-> tickets_sold (number): The number of tickets sold for the movie.
-> description (string): A brief description of the movie.
-> poster (string): URL of the movie poster image.

# Functionality

* The searchMovies function filters the movies array based on the search criteria provided (movie title and optional year). It performs a case-insensitive search by checking if the movie title includes the search query.
* The renderMovieListings function generates the HTML for the movie listings based on the filtered movies. It updates the movie list container with the generated HTML.
* The search form event listener listens for form submission. It retrieves the search input values, performs the movie search using searchMovies, and updates the movie listings with renderMovieListings.
* The initial rendering of movie listings is done by calling renderMovieListings with the complete movies array.

# License

MIT License

Copyright (c) 2023 <NAME> Stephan Maina Ndung'u.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Thank you all who will observe this........