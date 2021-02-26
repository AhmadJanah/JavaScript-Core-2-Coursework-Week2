let content = document.querySelector("#content");
let ul = document.createElement("ul");
function readingList(books) {
  // Write your code here...
  books.forEach(book => {
    let parag = document.createElement("p");
    let imgUrl = "https://img1.od-cdn.com/ImageType-400/4575-1/85E/A00/CF/{85EA00CF-F096-4068-8876-960C1075ED20}Img400.jpg";
    let li = document.createElement("li");
    let li2 = document.createElement("li");
    let imag = document.createElement("img");
    let bookColor = "red";
    parag.innerHTML = `Book title: <strong>${book.title}</strong>, Author: <strong>${book.author}</strong>`;
    if (book.title == "The Most Human Human")
      imgUrl = "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg";
    if (book.title == "The Pragmatic Programmer")
      imgUrl = "https://miro.medium.com/max/9033/1*swvNsA2oDGKo8IzmmVKxyg.png";
    imag.src = imgUrl;
    imag.width = "100";
    if (book.alreadyRead)
      bookColor = "green";
    li.appendChild(parag);
    li2.appendChild(imag);
    li.style.color = bookColor; 
    ul.appendChild(li);
    ul.appendChild(li2);
  });
  content.appendChild(ul);
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

readingList(books);