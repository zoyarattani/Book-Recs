console.log("✅ JavaScript file loaded");

const books = [
  { title: "It Ends With Us", author: "Colleen Hoover", genre: "Romance", rating: 5, link: "https://a.co/d/3DtTMNp" },
  { title: "Fourth Wing", author: "Rebecca Yarros", genre: "Fantasy", rating: 5, link: "https://a.co/d/aeJoz4x" },
  { title: "The Guest List", author: "Lucy Foley", genre: "Thriller", rating: 4, link: "https://a.co/d/idPG84t" },
  { title: "It Starts With Us", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/50KaLc3" },
  { title: "Verity", author: "Colleen Hoover", genre: "Thriller", rating: 5, link: "https://a.co/d/9gMGcdv" },
  { title: "All Your Perfects", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/5PX83BD" },
    { title: "Ugly Love", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/eYElCkJ" },
    { title: "Reminders of Him", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/ayDYinl" },
    { title: "November 9", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/dWPPyb1" },
    { title: "Hopeless", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/4rcwPI9" },
    { title: "Maybe Someday", author: "Colleen Hoover", genre: "Romance", rating: 3, link: "https://a.co/d/dN6qvnj" },
    { title: "Regretting You", author: "Colleen Hoover", genre: "Romance", rating: 4, link: "https://a.co/d/5CMozhm" },
    { title: "Slammed", author: "Colleen Hoover", genre: "Romance", rating: 3, link: "https://a.co/d/ixjxaxr" },
    { title: "Point of Retreat", author: "Colleen Hoover", genre: "Romance", rating: 3, link: "https://a.co/d/hRTk42p" },
    { title: "Confess", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/icCaPRl" },
    { title: "Layla", author: "Colleen Hoover", genre: ["Romance", "Thriller"], rating: 4, link: "https://a.co/d/61PerS5" },
    { title: "Heart Bones", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/4nhfmDw" },
    { title: "Without Merit", author: "Colleen Hoover", genre: "Romance", rating: 3, link: "https://a.co/d/27Fpmqq" },
    { title: "Too Late", author: "Colleen Hoover", genre: "Romance", rating: 2, link: "https://a.co/d/4KvPm8Q" },
    { title: "The Do Over", author: "Lynn Painter", genre: "Romance", rating: 4.5, link: "https://a.co/d/h42PiaA" },
    { title: "Better Than The Movies", author: "Lynn Painter", genre: "Romance", rating: 5, link: "https://a.co/d/g0NkeHz" },
    { title: "Mr Wrong Number", author: "Lynn Painter", genre: "Romance", rating: 4.5, link: "https://a.co/d/fhRz2RG" },
    { title: "Accidentally Amy", author: "Lynn Painter", genre: "Romance", rating: 4.5, link: "https://a.co/d/5e73fsk" },
    { title: "The Love Wager", author: "Lynn Painter", genre: "Romance", rating: 3.5, link: "https://a.co/d/afFySRY" },
      { title: "Then She Was Gone", author: "Lisa Jewell", genre: "Thriller", rating: 4, link: "https://a.co/d/8OtlEC1" },
    { title: "Never Never", author: "Colleen Hoover", genre: "Romance", rating: 3.5, link: "https://a.co/d/hgHfM5S" },
    { title: "The Deal", author: "Elle Kennedy", genre: "Romance", rating: 4, link: "https://a.co/d/iyL3x3d" },
    { title: "If He Had Been With Me", author: "Laura Nowlin", genre: "Romance", rating: 5, link: "https://a.co/d/ie4hKsv" },
    { title: "Iron Flame", author: "Rebecca Yarros", genre: ["Romance", "Fantasy"], rating: 5, link: "https://a.co/d/1pMggW0" },
      { title: "Everyone is Watching", author: "Heather Gudenkauf", genre: "Thriller", rating: 4, link: "https://a.co/d/iTohTQ4" },
      { title: "A Court of Thorns of Roses", author: "Sarah J. Maas", genre: ["Romance", "Fantasy"], rating: 5, link: "https://a.co/d/4l3LcuN" },
        { title: "A Court of Mist and Fury", author: "Sarah J. Maas", genre: ["Romance", "Fantasy"], rating: 5, link: "https://a.co/d/iQEPiC2" },
        { title: "A Court of Wings and Ruin", author: "Sarah J. Maas", genre: ["Romance", "Fantasy"], rating: 3.5, link: "https://a.co/d/iBkrnRx" },
        { title: "Butcher and Blackbird", author: "Brynne Weaver", genre: ["Romance", "Thriller"], rating: 4.5, link: "https://a.co/d/cr80q3R" },
        { title: "Lark and Leather", author: "Brynne Weaver", genre: ["Romance", "Fantasy"], rating: 3, link: "https://a.co/d/0otxCBU" },
        { title: "The Stranger in Her House", author: "John Marrs", genre: "Thriller" , rating: 4, link: "https://a.co/d/cYhFdzJ" },
        { title: "Flawless", author: "Elsie Silver", genre: "Romance", rating: 5, link: "https://a.co/d/1DUo1qn" },
          { title: "Heartless", author: "Elsie Silver", genre: "Romance", rating: 4, link: "https://a.co/d/9bUBwYE" },
          { title: "Powerless", author: "Elsie Silver", genre: "Romance", rating: 3.5, link: "https://a.co/d/ak0h2nx" },
          { title: "Reckless", author: "Elsie Silver", genre: "Romance", rating: 4, link: "https://a.co/d/412zStq" },
          { title: "Hopeless", author: "Elsie Silver", genre: "Romance", rating: 4.5, link: "https://a.co/d/2fIIcoQ" },
          { title: "Wild Love", author: "Elsie Silver", genre: "Romance", rating: 4, link: "https://a.co/d/4AuGgvP" },
  
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
  <h3>
    ${book.title}
    <a href="${book.link}" target="_blank" class="buy-icon" title="Buy this book">🛒</a>
  </h3>
  <p class="author">by ${book.author}</p>
  <p class="genre">${Array.isArray(book.genre) ? book.genre.join(", ") : book.genre}</p>
  <p class="rating">
    ${"★".repeat(Math.floor(book.rating))}
    ${book.rating % 1 === 0.5 ? "½" : ""}
  </p>
`;


document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("genre-select");
  if (select) {
    select.addEventListener("change", () => displayBooks(select.value));
  }
  displayBooks();
});

