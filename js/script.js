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

fetchBooksData('datas/books.json');