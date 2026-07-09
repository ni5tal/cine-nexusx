const API_KEY = "92eac45ee2e28ae00eabf532a9fa84de";

const movieGrid = document.getElementById("movieGrid");

fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
  .then(response => {
    if (!response.ok) {
      throw new Error("HTTP " + response.status);
    }
    return response.json();
  })
  .then(data => {
    movieGrid.innerHTML = "<pre style='color:white'>" +
      JSON.stringify(data, null, 2) +
      "</pre>";
  })
  .catch(error => {
    movieGrid.innerHTML =
      `<h2 style="color:red;">${error}</h2>`;
  });
