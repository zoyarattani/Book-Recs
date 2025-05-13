const books = [
  { title: "It Ends With Us", author: "Colleen Hoover", genre: "Romance", rating: 5 },
  { title: "Fourth Wing", author: "Rebecca Yarros", genre: "Fantasy", rating: 5 },
  { title: "The Guest List", author: "Lucy Foley", genre: "Thriller", rating: 4 },
  { title: "Better Than The Movies", author: "Lynn Painter", genre: "Romance", rating: 5 },
  { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", genre: "Fantasy", rating: 5 }
];

function displayBooks(filtered = "All") {
  const container = document.getElementById("book-container");
  container.innerHTML = "";

  books
    .filter(book => filtered === "All" || book.genre === filtered)
    .forEach(book => {
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
        <h3>${book.title}</h3>
        <p class="genre">${book.genre}</p>
        <p>by ${book.author}</p>
        <p class="rating">${"★".repeat(book.rating)}</p>
      `;
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("genre-select");
  select.addEventListener("change", () => displayBooks(select.value));
  displayBooks();
});

