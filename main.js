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

const fetchCheck = async () => {
    const response = await fetch("http://localhost:3000/images/1").then(r=>r.json())
    console.log(response)
    return response
  }
  
  fetchCheck()
  
  // A method is a function declared
  // from an object with dot notation.
  
  // select elements on the HTML page.
  // .getElementsByTagName looks for everything on the page
  // that has an HTML tag of whatever is in the perentheses:
  const body = document.getElementsByTagName("body")[0];
  const main = document.getElementsByTagName("main")[0];
  
  // .getElementById looks for HTML elements with an "id"
  // of whatever is in the perentheses.
  const input = document.getElementById("input");
  const myName = document.getElementById("name");
  const pageBg = document.getElementById("pageBg");
  
  const cardBg = document.getElementById("cardBg");
  const button = document.getElementById("button");
  
  // add click event listener to pageBg change button
  pageBg.addEventListener("click", function () {
    body.style.backgroundColor = randomColor();
  });
  
  // add click event listener to cardBg change button
  cardBg.addEventListener("click", function () {
    main.style.backgroundColor = randomColor();
  });
  
  // add click event to "Change it" button
  button.addEventListener("click", function () {
    myName.textContent = input.value;
    input.value = "";
  });
  
  // This is a function.
  // Functions perform actions.
  // This function returns a random color.
  function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
  
    return `rgba(${r}, ${g}, ${b}, 1)`;
  }