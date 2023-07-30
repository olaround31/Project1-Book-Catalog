// Sample book data (Replace this with your actual book data)
const bookData = [
  {
    title: 'Book 1',
    author: 'Author A',
    genre: 'Fiction',
    year: 2020,
  },
  {
    title: 'Book 2',
    author: 'Author B',
    genre: 'Fantasy',
    year: 2018,
  },
  // Add more books as needed
];

// Function to display books in the catalog
function displayBooks(books) {
  const catalogContainer = document.getElementById('bookCatalog');
  catalogContainer.innerHTML = '';

  books.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('book');
    bookElement.innerHTML = `
      <h2>${book.title}</h2>
      <p>Author: ${book.author}</p>
      <p>Genre: ${book.genre}</p>
      <p>Year: ${book.year}</p>
    `;
    catalogContainer.appendChild(bookElement);
  });
}

// Initial display of all books when the page loads
document.addEventListener('DOMContentLoaded', () => {
  displayBooks(bookData);
});

// Function to filter books by genre
function filterBooksByGenre(genre) {
  const filteredBooks = bookData.filter((book) => book.genre === genre);
  displayBooks(filteredBooks);
}

// Function to search for books by title or author
function searchBooks(query) {
  const lowercaseQuery = query.toLowerCase();
  const matchedBooks = bookData.filter(
    (book) =>
      book.title.toLowerCase().includes(lowercaseQuery) ||
      book.author.toLowerCase().includes(lowercaseQuery)
  );
  displayBooks(matchedBooks);
}

// Event listeners for filtering and searching
document.getElementById('filterByGenre').addEventListener('change', (event) => {
  const selectedGenre = event.target.value;
  if (selectedGenre === 'all') {
    displayBooks(bookData); // Show all books when 'all' is selected
  } else {
    filterBooksByGenre(selectedGenre);
  }
});

document.getElementById('searchInput').addEventListener('input', (event) => {
  const searchQuery = event.target.value.trim();
  if (searchQuery === '') {
    displayBooks(bookData); // Show all books when the search field is empty
  } else {
    searchBooks(searchQuery);
  }
});
