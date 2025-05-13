console.log("✅ JavaScript file loaded");

const books = [
  { title: "It Ends With Us", author: "Colleen Hoover", genre: "Romance", rating: 5 },
  { title: "Fourth Wing", author: "Rebecca Yarros", genre: "Fantasy", rating: 5 },
  { title: "The Guest List", author: "Lucy Foley", genre: "Thriller", rating: 4 },
  { title: "It Starts With Us", author: "Colleen Hoover", genre: "Romance", rating: 3.5 },
  { title: "Verity", author: "Colleen Hoover", genre: "Thriller", rating: 5 },
  { title: "All Your Perfects", author: "Colleen Hoover", genre: "Romance", rating: 4 },
    { title: "Ugly Love", author: "Colleen Hoover", genre: "Romance", rating: 3.5 },
    { title: "Reminders of Him", author: "Colleen Hoover", genre: "Romance", rating: 4 },
    { title: "November 9", author: "Colleen Hoover", genre: "Romance", rating: 4 },
    { title: "Hopeless", author: "Colleen Hoover", genre: "Romance", rating: 4 },
    { title: "Maybe Someday", author: "Colleen Hoover", genre: "Romance", rating: 3 },
    { title: "Regretting You", author: "Colleen Hoover", genre: "Romance", rating: 4 },
    { title: "Slammed", author: "Colleen Hoover", genre: "Romance", rating: 3 },
    { title: "Point of Retreat", author: "Colleen Hoover", genre: "Romance", rating: 3 },
    { title: "Confess", author: "Colleen Hoover", genre: "Romance", rating: 3.5 },
    { title: "Layla", author: "Colleen Hoover", genre: ["Romance", "Thriller"], rating: 4 },
    { title: "Heart Bones", author: "Colleen Hoover", genre: "Romance", rating: 3.5 },
    { title: "Without Merit", author: "Colleen Hoover", genre: "Romance", rating: 3 },
    { title: "Too Late", author: "Colleen Hoover", genre: "Romance", rating: 2 },
    { title: "The Do Over", author: "Lynn Painter", genre: "Romance", rating: 4.5 },
    { title: "Better Than The Movies", author: "Lynn Painter", genre: "Romance", rating: 5 },
    { title: "Mr Wrong Number", author: "Lynn Painter", genre: "Romance", rating: 4.5 },
    { title: "Accidentally Amy", author: "Lynn Painter", genre: "Romance", rating: 4.5 },
    { title: "The Love Wager", author: "Lynn Painter", genre: "Romance", rating: 3.5 },
      { title: "Then She Was Gone", author: "Lisa Jewell", genre: "Thriller", rating: 4 },
    { title: "Never Never", author: "Colleen Hoover", genre: "Romance", rating: 3.5 },
    { title: "The Deal", author: "Elle Kennedy", genre: "Romance", rating: 4 },
    { title: "If He Had Been With Me", author: "Laura Nowlin", genre: "Romance", rating: 5 },
    { title: "Iron Flame", author: "Rebecca Yarros", genre: ["Romance", "Fantasy"], rating: 5 },
      { title: "Everyone is Watching", author: "Heather Gudenkauf", genre: "Thriller", rating: 4 },
      { title: "A Court of Thorns of Roses", author: "Sarah J. Maas", genre: ["Romance", "Fantasy"], rating: 5 },
        { title: "A Court of Mist and Fury", author: "Sarah J. Maas", genre: ["Romance", "Fantasy"], rating: 5 },
        { title: "A Court of Wings and Ruin", author: "Sarah J. Maas", genre: ["Romance", "Fantasy"], rating: 3.5 },
        { title: "Butcher and Blackbird", author: "Brynne Weaver", genre: ["Romance", "Thriller"], rating: 4.5 },
        { title: "Lark and Leather", author: "Brynne Weaver", genre: ["Romance", "Fantasy"], rating: 3 },
        { title: "The Stranger in Her House", author: "John Marrs", genre: "Thriller" , rating: 4 },
        { title: "Flawless", author: "Elsie Silver", genre: "Romance", rating: 5 },
          { title: "Heartless", author: "Elsie Silver", genre: "Romance", rating: 4 },
          { title: "Powerless", author: "Elsie Silver", genre: "Romance", rating: 3.5 },
          { title: "Reckless", author: "Elsie Silver", genre: "Romance", rating: 4 },
          { title: "Hopeless", author: "Elsie Silver", genre: "Romance", rating: 4.5 },
          { title: "Wild Love", author: "Elsie Silver", genre: "Romance", rating: 4 },
  
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
      card.innerHTML = `
        <h3>${book.title}</h3>
        <p class="genre">${genresText}</p>
        <p>by ${book.author}</p>
        <p class="rating">${"★".repeat(book.rating)}</p>
      `;
      container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("genre-select");
  if (select) {
    select.addEventListener("change", () => displayBooks(select.value));
  }
  displayBooks();
});

