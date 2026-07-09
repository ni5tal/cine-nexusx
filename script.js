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
const title = card.dataset.title;
const year = card.dataset.year;
const genre = card.dataset.genre;
const rating = card.dataset.rating;
const description = card.dataset.description;
const poster = card.dataset.poster;
const trailer = card.dataset.trailer;    


    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalYear").textContent = year;
document.getElementById("modalGenre").textContent = genre;
    document.getElementById("modalRating").textContent = rating;
document.getElementById("modalDescription").textContent = description;
      "A fresh take on Superman, directed by James Gunn.";

document.getElementById("trailerBtn").href = trailer;

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
