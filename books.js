console.log("✅ JavaScript file loaded");

const books = [
  { title: "It Ends With Us", author: "Colleen Hoover", genre: "Romance", rating: 5, link: "https://a.co/d/2F1WzUl"},
  { title: "Fourth Wing", author: "Rebecca Yarros", genre: "Fantasy", rating: 5, link: "https://a.co/d/fXwKE12"},
  { title: "The Guest List", author: "Lucy Foley", genre: "Thriller", rating: 4, link: "https://a.co/d/hD2Ctcy"},
  { title: "It Starts With Us", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/2xZgPJJ"},
  { title: "Verity", author: "Colleen Hoover", genre: "Thriller", rating: 5, link: "https://a.co/d/dWupfU8"},
  { title: "All Your Perfects", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/1TivwtN"},
  { title: "Ugly Love", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/5U1s0U4"},
  { title: "Reminders of Him", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/iq1qtmU"},
  { title: "November 9", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/3Dbcgla"},
  { title: "Hopeless", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/1joZxQO"},
  { title: "Maybe Someday", author: "Colleen Hoover", genre: "Romance", rating: 3, link: "https://a.co/d/idyzGUe"},
  { title: "Regretting You", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/fsH2nN3"},
  { title: "Slammed", author: "Colleen Hoover", genre: "Romance", rating: 3, link: "https://a.co/d/dye71Pi"},
  { title: "Point of Retreat", author: "Colleen Hoover", genre: "Romance", rating: 3, link: "https://a.co/d/6wTCfl9"},
  { title: "Confess", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/1pHElas"},
  { title: "Layla", author: "Colleen Hoover", genre: ["Romance", "Thriller"], rating: 4, link: "https://a.co/d/bZxYpyu"},
  { title: "Heart Bones", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/dQqXlMA"},
  { title: "Without Merit", author: "Colleen Hoover", genre: "Romance", rating: 3, link: "https://a.co/d/33nPpQR"},
  { title: "Too Late", author: "Colleen Hoover", genre: "Romance", rating: 2, link: "https://a.co/d/i4e9zNu"},
  { title: "The Do Over", author: "Lynn Painter", genre: "Romance", rating: 4.5, link: "https://a.co/d/8Crawgz"},
  { title: "Better Than The Movies", author: "Lynn Painter", genre: "Romance", rating: 5, link: "https://a.co/d/4R9SYcy"},
  { title: "Mr Wrong Number", author: "Lynn Painter", genre: "Romance", rating: 4.5, link: "https://a.co/d/3EO1eMF"},
  { title: "Accidentally Amy", author: "Lynn Painter", genre: "Romance", rating: 4.5, link: "https://a.co/d/bSjXopR"},
  { title: "The Love Wager", author: "Lynn Painter", genre: "Romance", rating: 3.5, link: "https://a.co/d/55fm7Ty"},
  { title: "Then She Was Gone", author: "Lisa Jewell", genre: "Thriller", rating: 4, link: "https://a.co/d/8plNykB"},
  { title: "Never Never", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/fOeQheM"},
  { title: "The Deal", author: "Elle Kennedy", genre: "Romance", rating: 4, link: "https://a.co/d/gXep7dY"},
  { title: "If He Had Been With Me", author: "Laura Nowlin", genre: "Romance", rating: 5, link: "https://a.co/d/h4K7xje"},
  { title: "Iron Flame", author: "Rebecca Yarros", genre: ["Romance", "Fantasy"], rating: 5, link: "https://a.co/d/43xFiRb"},
  { title: "Everyone is Watching", author: "Heather Gudenkauf", genre: "Thriller", rating: 4, link: "https://a.co/d/6PTPFal"},
  { title: "A Court of Thorns of Roses", author: "Sarah J. Maas", genre: ["Romance", "Fantasy"], rating: 5, link: "https://a.co/d/dQSQHy6"},
  { title: "A Court of Mist and Fury", author: "Sarah J. Maas", genre: ["Romance", "Fantasy"], rating: 5, link: "https://a.co/d/1GBfLE3"},
  { title: "A Court of Wings and Ruin", author: "Sarah J. Maas", genre: ["Romance", "Fantasy"], rating: 3.5, link: "https://a.co/d/9qEmcDi"},
  { title: "Butcher and Blackbird", author: "Brynne Weaver", genre: ["Romance", "Thriller"], rating: 4.5, link: "https://a.co/d/95RzM4f"},
  { title: "Leather and Lark", author: "Brynne Weaver", genre: ["Romance", "Fantasy"], rating: 3, link: "https://a.co/d/c6FYWRt"},
  { title: "The Stranger in Her House", author: "John Marrs", genre: "Thriller", rating: 4, link: "https://a.co/d/6EMGSNC"},
  { title: "Flawless", author: "Elsie Silver", genre: "Romance", rating: 5, link: "https://a.co/d/9Uil4Sx"},
  { title: "Heartless", author: "Elsie Silver", genre: "Romance", rating: 4, link: "https://a.co/d/fGfrB39"},
  { title: "Powerless", author: "Elsie Silver", genre: "Romance", rating: 3.5, link: "https://a.co/d/hXDqikw"},
  { title: "Reckless", author: "Elsie Silver", genre: "Romance", rating: 4, link: "https://a.co/d/izKI4PM"},
  { title: "Hopeless", author: "Elsie Silver", genre: "Romance", rating: 4.5, link: "https://a.co/d/5vlBxmx"},
  { title: "Wild Love", author: "Elsie Silver", genre: "Romance", rating: 4, link: "https://a.co/d/6s6kk0F"},
  
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
        <p class="author">by ${book.author}</p>
        <p class="genre">${genresText}</p>
        <p class="rating">
          ${"★".repeat(Math.floor(book.rating))}
          ${book.rating % 1 === 0.5 ? "½" : ""}
        </p>
      `;
      container.appendChild(card); // ✅ This line was missing!
    });
}

  



document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("genre-select");
  if (select) {
    select.addEventListener("change", () => displayBooks(select.value));
  }
  displayBooks();
});

