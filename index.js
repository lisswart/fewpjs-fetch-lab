const book = {
authors: ["George R. R. Martin"],
country: "United States",
isbn: "978-0553103540",
mediaType: "Hardcover",
name: "A Game of Thrones",
numberOfPages: 694,
povCharacters: ["https://anapioficeandfire.com/api/characters/148", 
                "https://anapioficeandfire.com/api/characters/208", 
                "https://anapioficeandfire.com/api/characters/232", 
                "https://anapioficeandfire.com/api/characters/339", 
                "https://anapioficeandfire.com/api/characters/583", 
                "https://anapioficeandfire.com/api/characters/957", 
                "https://anapioficeandfire.com/api/characters/1052", 
                "https://anapioficeandfire.com/api/characters/1109", 
                "https://anapioficeandfire.com/api/characters/1303"],
publisher: "Bantam Books",
released: "1996-08-01T00:00:00",
url: "https://anapioficeandfire.com/api/books/1"
}

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(books) {
  getISBN(books);
  getBookName(books);
  getNumberOfPages(books);
  // const main = document.querySelector('main');
  // main.appendChild(getISBN(books));
  // books.forEach(book => {
  //   const h2 = document.createElement('h2');
  //   // const p1 = document.createElement('p');
  //   const p2 = document.createElement('p');
  //   // p1.innerHTML = `ISBN: ${book.isbn}`;
  //   h2.innerHTML = book.name;
  //   p2.innerHTML = `number of pages: ${book.numberOfPages}`;
  //   // main.appendChild(p1);
  //   main.appendChild(h2);
  //   main.appendChild(p2);
  // });
  // const p3 = document.createElement('p');
  // p3.innerHTML = `Fifth book in the series: ${books[4].name}`;
  // main.appendChild(p3);
}

function getISBN(books) {
  books.forEach(function(book) {
    const main = document.querySelector('main');
    const p = document.createElement('p');
    p.innerHTML = `ISBN: ${book.isbn}`;
    main.appendChild(p);
  });
}

function getBookName(books) {
  books.forEach(function (book) {
    const main = document.querySelector('main');
    const h2 = document.createElement('h2');
    h2.innerHTML = `Book title: ${book.name}`;
    main.appendChild(h2);
  });
}

function getNumberOfPages(books) {
  books.forEach((book) => {
    const main = document.querySelector('main');
    const p = document.createElement('p');
    p.innerHTML = `Number of pages: ${book.numberOfPages}`;
    main.appendChild(p);
  });  
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
