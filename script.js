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
