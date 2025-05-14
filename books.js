console.log("✅ JavaScript file loaded");

const books = [
  { title: "It Ends With Us", author: "Colleen Hoover", genre: "Romance", rating: 5, link: "https://a.co/d/2F1WzUl"},
  
];

function displayBooks(filtered = "All") {
  const container = document.getElementById("book-container");
  if (!container) {
    console.error("❌ Missing #book-container");
    return;
  }

  container.innerHTML = "";

  books
    .filter(book => {
      if (filtered === "All") return true;
      if (Array.isArray(book.genre)) {
        return book.genre.includes(filtered);
      } else {
        return book.genre === filtered;
      }
    })
  .forEach(book => {
  const genresText = Array.isArray(book.genre)
    ? book.genre.join(", ")
    : book.genre;

  const card = document.createElement("div");
  card.className = "book-card";

  card.innerHTML = 
    <h3>
      ${book.title}
      ${book.link ? <a href="${book.link}" target="_blank" class="buy-icon" title="Buy this book">🛒</a> : ""}
    </h3>
    <p class="author">by ${book.author}</p>
    <p class="genre">${genresText}</p>
    <p class="rating">
      ${"★".repeat(Math.floor(book.rating))}
      ${book.rating % 1 === 0.5 ? "½" : ""}
    </p>
  ;

  container.appendChild(card); // ✅ still needed to actually show the book card on the page
});



document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("genre-select");
  if (select) {
    select.addEventListener("change", () => displayBooks(select.value));
  }
  displayBooks();
});

