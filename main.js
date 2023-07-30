// Fetch the JSON data from db.json using Fetch API
fetch('db.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        window.database = data;
        performSearch();
    })
    .catch(function(error) {
        console.error("Error fetching JSON data:", error);
    });

// Attach the search function to the form's submit event
var searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    performSearch();
});

document.addEventListener("keydown", function (event) {
  handleKeydown(event);
});

performSearch();
