export const store = {
    state: {
        books: {}
    },
    addBooks(books) {
        this.state.books = books;
    },
    async getBookById(bookId) {
        if (this.books)
            return this.state.books.find(book => book.industryIdentifiers[0] = bookId)
        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookId}&maxResults=1&printType=books`, {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        })
            .then(el => el.json())
            .then(el => el.items[0].volumeInfo)
    }
};