// First, parse the JSON we've thrown into the DOM
let searchData = JSON.parse(document.getElementById("search-data").textContent);

// Create a reference to our search results
let searchResultsList = document.getElementById("search-results");

// And one for our search input
let searchInput = document.getElementById("search-bar");

let updateSearchResults = function (e) {
  // Make the query case-insensitive
  let q = e.target.value.toLowerCase();

  // Make sure it isn't empty
  if (q.trim() !== "") {
    // Empty the search results DOM element
    searchResultsList.innerHTML = "";

    // Loop over all the items in our JSON blob
    for (let i in searchData) {
      let searchItem = searchData[i];

      // Check if the title or description includes our query string
      if (
        searchItem.title.toLowerCase().includes(q) ||
        searchItem.description.toLowerCase().includes(q)
      ) {
        // If it does, append a link to our results element
        let searchLink = document.createElement("a");
        let searchContent = document.createTextNode(searchItem.title);

        searchLink.setAttribute("href", searchItem.href);
        searchLink.appendChild(searchContent);
        searchResultsList.appendChild(searchLink);
      }
    }
  }
};

// Finally, bind our new function to the search input element
searchInput.addEventListener("keyup", updateSearchResults);
