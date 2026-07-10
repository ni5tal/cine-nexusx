// ==========================
// CINE NEXUS v2 - SCRIPT.JS
// ==========================

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const randomBtn = document.getElementById("randomBtn");

const modal = document.getElementById("movieModal");
const closeBtn = document.querySelector(".close-btn");

const modalPoster = document.getElementById("modalPoster");
const modalTitle = document.getElementById("modalTitle");
const modalRating = document.getElementById("modalRating");
const modalYear = document.getElementById("modalYear");
const modalDescription = document.getElementById("modalDescription");
const trailerBtn = document.getElementById("trailerBtn");

// ================= OPEN MODAL =================

document.querySelectorAll(".movie-card").forEach(card=>{

card.addEventListener("click",()=>{

modal.style.display="flex";

modalPoster.src=card.dataset.poster;
modalTitle.textContent=card.dataset.title;
modalRating.textContent="⭐ "+card.dataset.rating;
modalYear.textContent="📅 "+card.dataset.year;
modalDescription.textContent=card.dataset.description;
trailerBtn.href=card.dataset.trailer;

});

});

// ================= CLOSE =================

closeBtn.onclick=()=>{

modal.style.display="none";

};

window.onclick=(e)=>{

if(e.target===modal){

modal.style.display="none";

}

};

// ================= SEARCH =================

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

document.querySelectorAll(".movie-card").forEach(card=>{

const title=card.dataset.title.toLowerCase();

card.style.display=
title.includes(value)
?
"block"
:
"none";

});

});

// ================= RANDOM MOVIE =================

randomBtn.addEventListener("click",()=>{

const cards=[...document.querySelectorAll(".movie-card")];

const random=
cards[Math.floor(Math.random()*cards.length)];

random.scrollIntoView({

behavior:"smooth",
block:"center"

});

random.click();

});

// ================= HERO FADE =================

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

hero.style.opacity=
1-window.scrollY/700;

});

// ================= CARD ANIMATION =================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".movie-card").forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(50px)";
card.style.transition=".7s";

observer.observe(card);

});
