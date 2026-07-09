// Smooth reveal animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".movie-card").forEach(card=>{
    observer.observe(card);
});

// Hero animation

window.addEventListener("load",()=>{

    const hero=document.querySelector(".hero-content");

    hero.style.opacity="1";

    hero.style.transform="translateY(0)";
});
