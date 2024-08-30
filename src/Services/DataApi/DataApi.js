class DataApi {
    _baseUrl = 'http://localhost:3001/';
     getData = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);

        return await res.json();
    };

    getAllBooks = async () => {
        const res = await this.getData('booksData');
        return res.map(this._transformBook);
    };
    getBook = async (id) => {
        const book = await this.getData(`booksData/${id}`);
        return this._transformBook(book);
    };

    _transformBook = (book) => {
        return {
            id: book.id,
            title: book.title,
            author: book.author,
            annotation : book.annotation,
            publicationDate : book.publicationDate,
            bookCover : book.bookCover,
            completed: book.completed,
            completedDate: book.completedDate,
            currentStatus: book.currentStatus
        }
    }
};

export default DataApi
