export const store = {
    state: {
        books: {}
    },
    addBooks(text) {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${text}&orderBy=newest&maxResults=40&printType=books`, {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        })
        .then(el => el.json())
        .then(books => {
            this.state.books = books.items
                .filter((book, i, books) => books.findIndex(y => y.id === book.id) === i)
                .map(el => {
                    return {
                        ...el.volumeInfo,
                        id: el.id
                    }
                })
        })
    },
    getBookById(bookId) {
        if (Object.keys(this.state.books).length > 0)
            return this.state.books.find(book => book.industryIdentifiers[0].identifier === bookId)

        return fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookId}&maxResults=1&printType=books`, {
            method: 'GET',
            headers: new Headers(),
            mode: 'cors',
            cache: 'default'
        })
            .then(el => el.json())
            .then(el => {
                return {
                    ...el.items[0].volumeInfo,
                    id: el.items[0].id
                }
            })
    }
};