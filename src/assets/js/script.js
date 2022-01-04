// Swiper JS
let contentWrapperSwiper = document.getElementById("content-wrapper-swiper");

if (contentWrapperSwiper != null) {
  contentWrapperSwiper.style.display = "block";
  const swiper = new Swiper(".swiper", {
    effect: "cards",
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
  });
}

// Jekyll Search
if (typeof SimpleJekyllSearch === "function") {
  SimpleJekyllSearch({
    searchInput: document.getElementById("search-input"),
    resultsContainer: document.getElementById("results-container"),
    json: "search.json",
    searchResultTemplate:
      '<li><a tabindex="0" href="{url}" title="{title}">{title}</a></li>',
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
if (document.getElementById("post-costs") != null) {
  let costRating = parseFloat(
    document.getElementById("post-costs").textContent
  );
  let effectRating = parseFloat(
    document.getElementById("post-effect").textContent
  );

  displayCosts = (costs) => {
    const costsTotal = 5;
    const costsPercentage = (costs / costsTotal) * 100;
    const costsPercentageRounded = `${Math.round(costsPercentage / 10) * 10}%`;
    document.querySelector(`.post__costs--filled`).style.width =
      costsPercentageRounded;
    document.getElementById(`post-costs`).style.display = "none";
  };

  displayStars = (stars) => {
    const starsTotal = 5;
    const starsPercentage = (stars / starsTotal) * 100;
    const starsPercentageRounded = `${Math.round(starsPercentage / 10) * 10}%`;
    document.querySelector(`.post__stars--filled`).style.width =
      starsPercentageRounded;
    document.getElementById(`post-effect`).style.display = "none";
  };

  displayCosts(costRating);
  displayStars(effectRating);
}
