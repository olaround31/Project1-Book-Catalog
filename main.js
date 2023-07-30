// Function to perform the search and update the table
function performSearch() {
  var searchForm = document.getElementById("searchForm");
  var searchCriteria = searchForm.SRCH.value;
  var searchQuery = searchForm.search.value;
  var resultsTable = document.getElementById("resultsTable");
  var tableBody = resultsTable.getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing rows

  if (searchQuery) {
      var filteredData = database.filter(function (item) {
          if (searchCriteria === "Author") {
              return item.name.toLowerCase().includes(searchQuery.toLowerCase());
          } else if (searchCriteria === "Title") {
              return item.title.toLowerCase().includes(searchQuery.toLowerCase());
          } else if (searchCriteria === "ISBN") {
              return item.isbn.toLowerCase().includes(searchQuery.toLowerCase());
          }
      });

      if (filteredData.length > 0) {
          filteredData.forEach(function (item) {
              var row = tableBody.insertRow();
              var nameCell = row.insertCell(0);
              var titleCell = row.insertCell(1);
              var isbnCell = row.insertCell(2);

              nameCell.innerText = item.name;
              titleCell.innerText = item.title;
              isbnCell.innerText = item.isbn;
          });
      } else {
          var row = tableBody.insertRow();
          var noResultsCell = row.insertCell(0);
          noResultsCell.colSpan = 3;
          noResultsCell.innerText = "No Record Found";
      }
  } else {
      // Display all records if no search query provided
      database.forEach(function (item) {
          var row = tableBody.insertRow();
          var nameCell = row.insertCell(0);
          var titleCell = row.insertCell(1);
          var isbnCell = row.insertCell(2);

          nameCell.innerText = item.name;
          titleCell.innerText = item.title;
          isbnCell.innerText = item.isbn;
      });
  }
}

function handleKeydown(event) {
if (event.key === " ") {
  document.body.classList.toggle("dark-mode");
}
}


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
