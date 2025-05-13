console.log("✅ JavaScript file loaded");

const books = [
  { title: "It Ends With Us", author: "Colleen Hoover", genre: "Romance", rating: 5 },
  { title: "Fourth Wing", author: "Rebecca Yarros", genre: "Fantasy", rating: 5 },
  { title: "The Guest List", author: "Lucy Foley", genre: "Thriller", rating: 4 },
  { title: "Better Than The Movies", author: "Lynn Painter", genre: "Romance", rating: 5 },
  { title: "A Court of Thorns and Roses", author: "Sarah J. Maas", genre: "Fantasy", rating: 5 }
];

function displayBooks(filtered = "All") {
  console.log("📚 Rendering books with filter:", filtered);
  const container = document.getElementById("book-container");
  if (!container) {
    console.error("❌ Missing #book-container");
    return;
  }

  container.innerHTML = "";

  books
    .filter(book => filtered === "All" || book.genre === filtered)
    .forEach(book => {
      const card = document.createElement("div");
      card.className = "book-card";
      card.innerHTML = `
        <h3>${book.title}</h3>
        <p>${book.author} - <em>${book.genre}</em></p>
        <p>${"★".repeat(book.rating)}</p>
      `;
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("🟢 DOM ready");
  const select = document.getElementById("genre-select");
  if (select) {
    select.addEventListener("change", () => displayBooks(select.value));
  }
  displayBooks();
});




