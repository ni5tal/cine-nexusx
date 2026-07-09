const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".movie-card").forEach(card => {
    observer.observe(card);
});

window.addEventListener("load", () => {
    const hero = document.querySelector(".hero-content");

    if (hero) {
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0)";
    }
});
// ===== Movie Modal =====

const modal = document.getElementById("movieModal");
const closeBtn = document.querySelector(".close-btn");

const movieCards = document.querySelectorAll(".movie-card");

movieCards.forEach(card => {
  card.addEventListener("click", () => {
    document.getElementById("modalPoster").src =
      "https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg";

    document.getElementById("modalTitle").textContent = "Superman (2025)";
    document.getElementById("modalYear").textContent = "📅 2025";
    document.getElementById("modalGenre").textContent = "🎭 Action / Sci-Fi";
    document.getElementById("modalRating").textContent = "⭐ 9.2 / 10";
    document.getElementById("modalDescription").textContent =
      "A fresh take on Superman, directed by James Gunn.";

    document.getElementById("trailerBtn").href =
      "https://www.youtube.com/results?search_query=Superman+2025+Official+Trailer";

    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
