// Swiper JS
const swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
});

// Jekyll Search
if (typeof SimpleJekyllSearch === "function") {
  SimpleJekyllSearch({
    searchInput: document.getElementById("search-input"),
    resultsContainer: document.getElementById("results-container"),
    json: "/search.json",
    searchResultTemplate:
      '<li><a tabindex="0" href="{url}" title="{desc}">{title}</a></li>',
    noResultsText: "<p>Hoppla, kein Treffer.</p>",
    limit: 50,
    fuzzy: false,
    exclude: ["Welcome"],
  });

  // Check if the results have an input and display it
  let searchInput = document.getElementById("search-input");
  let resultsContainer = document.getElementById("results-container");

  searchInput.oninput = (elem) => {
    let userInput = elem.target.value;

    let hide = function (elem) {
      elem.style.display = "none";
    };
    let show = function (elem) {
      elem.style.display = "block";
    };

    if (userInput) {
      show(resultsContainer);
    } else {
      hide(resultsContainer);
    }
  };
}

// Display rating as icons
let costRating = document.getElementById("post-cost").textContent;
let effectRating = document.getElementById("post-effect").textContent;

console.log(costRating);
console.log(effectRating);
console.log(typeof effectRating);
console.log(effectRating * 100);

let rating = costRating.indexOf("/");

console.log(rating);

// Total Stars
const starsTotal = 5;

// Get ratings
function showRatings(elem) {
  for (let rating in ratings) {
    // Get percentage
    const starPercentage = (ratings[rating] / starsTotal) * 100;

    // Round to nearest 10
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // Set width of stars-inner to percentage
    document.querySelector(`.${rating} .stars-inner`).style.width =
      starPercentageRounded;

    // Add number rating
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}

showRatings();
