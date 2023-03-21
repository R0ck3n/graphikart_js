class Book {

    #page = 1

    constructor(title, pages) {
        this.title = title
        this.pages = pages
    }

    get page () {
        return this.#page
    }
    nextPage () {
        if (this.#page < this.pages) this.#page ++
    }
    close() {
        return this.#page = 1
    }
}

class Library {
    #books = []

    addBook(book) {
            this.#books.push(book)
    }

    addBooks(books) {
            books.forEach(el=> this.#books.push(el))
        }
    findBooksByLetter(v){
      return this.#books.filter((el) => el.title[0].toLowerCase() === v.toLowerCase())
    }
}

const b = new Book('Seigneur des anneaux', 200);
console.log(b.page)
b.nextPage()
console.log(b.page)
b.close()
console.log(b.page)

const l = new Library()
l.addBook(b)
l.addBooks([
    new Book('Ready player one', 100),
    new Book('Oui-oui', 10),
    new Book('Sillage', 50),
])
console.log(l.findBooksByLetter('o'))