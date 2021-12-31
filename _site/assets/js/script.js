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


console.log(costRating);
console.log(effectRating);
console.log(typeof effectRating);
console.log(effectRating * 100);

let costRating = document.getElementById("post-cost");
let effectRating = document.getElementById("post-effect");

// Get ratings
showRatings(costRating)
showRatings(effectRating)

function getRatings(elem) {

  rating = elem

  if (rating == "0/5") {
    rating = 0
  } else if (rating == "0.5/5") {
    rating = 0.5
  } else if (rating == "1/5") {
    rating = 1
  } else if (rating == "1.5/5") {
    rating = 1.5
  } else if (rating == "2/5") {
    rating = 1.5
  } else if (rating == "2.5/5") {
    rating = 2.5
  } else if (rating == "3/5") {
    rating = 3
  } else if (rating == "3.5/5") {
    rating = 3.5
  } else if (rating == "4/5") {
    rating = 4
  } else if (rating == "4.5/5") {
    rating = 4.5
  } else if (rating == "5/5") {
    rating = 5
  } else {
    rating = 0
  }
  
}

function displayRatings(elem){
  for (i=0; i<=rating; i++) {
    console.log()
  }
}
