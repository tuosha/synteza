class DataApi {
    _baseUrl = 'http://localhost:3001/';
     getData = async (url) => {
        const res = await fetch(`${this._baseUrl}${url}`);
        if (!res.ok){
            throw new Error("Can't connect to SERVER, status : " + res.status)
        }
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
            bookCover : book.bookCover
        }
    }
};

export default DataApi
