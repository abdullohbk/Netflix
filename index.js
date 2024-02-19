"use strict";

const categoryOption = $("#category");
const moviesWrapper = $(".movies");
const darkBtn = $(".dark-btn");

movies.splice(100);

const allMovie = movies.map((el) => {
  return {
    title: el.title,
    year: el.year,
    category: el.categories,
    id: el.imdbId,
    rating: el.imdbRating,
    time: `${Math.trunc(el.runtime / 60)}H,  ${Math.trunc(el.runtime % 60)}min`,
    language: el.language,
    youtube: `https://www.youtube.com/embed/${el.youtubeId}`,
    minImg: el.smallThumbnail,
    maxImg: el.bigThumbnail,
  };
});

function getCategory(moviesList) {
  const category = [];
  if (moviesList.length) {
    moviesList.forEach((el) => {
      el.category.forEach((e) => {
        if (!category.includes(e)) {
          category.push(e);
        }
      });
    });
  }
}

getCategory(allMovie);

function render(data) {
  if (data.length) {
    data.forEach((el) => {
      const option = createElement("option", "  ", el);
      categoryOption.appendChild(option);
    });
  }
}

function renderAllmovie(movieList) {
  if (movieList.length) {
    movieList.forEach((el) => {
      const card = createElement(
        "div",
        "card",
        `
       <img
              src="${el.minImg}"
              alt=""
            />
            <div class="card-body">
              <h2>${
                el.title.length > 26
                  ? el.title.substring(0, 23) + "..."
                  : el.title
              }</h2>
              <ul>
                <li><strong>YEAR:</strong>${el.year}</li>
                <li><strong>CATEGORIES:</strong>${el.category}</li>
                <li><strong>rating:</strong>${el.rating}</li>
                <li><strong>Country:</strong>${el.language}</li>
              </ul>
              <div class="flex items-center gap-x-3 btn-wrapper">
                <button
                  class="grid place-content-center p-4 border w-12 h-12 rounded-full text-red-700 hover:bg-red-700 hover:text-white duration-300"
                >
                  <i class="bi bi-suit-heart-fill"></i>
                </button>
                <a
                  href="${el.youtube}"
                  target="_blank"
                  class="flex hover:bg-black hover:text-white duration-500 text-xl px-3 justify-center gap-x-2 items-center border min-w-24 h-12 rounded-full"
                >
                  <i class="bi bi-play-circle-fill"></i><span> Watch move</span>
                </a>
              </div>
            </div>`
      );

      moviesWrapper.appendChild(card);
    });
  }
}

renderAllmovie(allMovie);

let isDarkMode = false;

darkBtn.onclick = function () {
  if (isDarkMode == false) {
    document.body.style.transition = "all 0.2s linear";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = "white"));
  } else {
    document.body.style.transition = "all 0.2s linear";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document
      .querySelectorAll(".title")
      .forEach((el) => (el.style.color = "black"));
  }
  isDarkMode = !isDarkMode;
};
