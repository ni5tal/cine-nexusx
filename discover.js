const API_KEY = "92eac45ee2e28ae00eabf532a9fa84de";

const movieGrid = document.getElementById("movieGrid");

async function loadTrendingMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );

    const data = await response.json();

    movieGrid.innerHTML = "";

    data.results.forEach(movie => {
      movieGrid.innerHTML += `
        <div class="movie-card">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <div class="movie-info">
            <h3>${movie.title}</h3>
            <p>⭐ ${movie.vote_average.toFixed(1)}/10</p>
            <p>📅 ${movie.release_date}</p>
          </div>
        </div>
      `;
    });

  } catch (error) {
    movieGrid.innerHTML =
      "<h2 style='color:red'>Failed to load movies.</h2>";
    console.error(error);
  }
}

loadTrendingMovies();
