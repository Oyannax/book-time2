// Retrieve books data
async function fetchBooksData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch(err) {
        console.error('Impossible de charger les données : ' + err);
    }
}

// Create a book element
function createBookElement(book) {
    // Copy template
    const bookElement = document.importNode(document.getElementById('book-template').content, true);

    // Put the title
    bookElement.querySelector('.book-ttl').textContent = book.title;

    // Put the image
    const img = bookElement.querySelector('.book-img');
    img.src = book.image;
    img.alt = book.title;

    return bookElement;
}

// Display books
function displayBooks(books) {
    for (const book of books) {
        document.getElementById('books-container').appendChild(createBookElement(book));
    }
}

fetchBooksData('datas/books.json')
    .then(displayBooks);