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

  searchInput.onkeyup = (elem) => {
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
