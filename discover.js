const API_KEY = "92eac45ee2e28ae00eabf532a9fa84de";

fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
  .then(response => {
    console.log(response.status);
    return response.json();
  })
  .then(data => {
    document.getElementById("movieGrid").innerHTML =
      "<pre style='color:white'>" +
      JSON.stringify(data, null, 2) +
      "</pre>";
  })
  .catch(error => {
    document.getElementById("movieGrid").innerHTML =
      "<h2 style='color:red'>Error: " + error + "</h2>";
  });
