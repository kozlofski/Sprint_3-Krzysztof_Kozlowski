library = {
    name: 'Biblioteka Publiczna nr 69',
    books: [],
}

book1 = {
    title: 'Harry Potter i Insygnia Śmierci',
    author: 'Rowling J.K.',
    yearOfPublication: 2007,
}

book2 = {
    title: 'Diuna',
    author: 'Herbert Frank',
    yearOfPublication: 1965,
}

book3 = {
    title: 'Odyseja Kosmiczna 2001',
    author: 'C. Clarke Arthur',
    yearOfPublication: 1968,
}

library.books.push(book1);
library.books.push(book2);
library.books.push(book3);

const title1 = book1.title;
const author1 = book1.author;
const yearOfPublication1 = book1.yearOfPublication; 

const title2 = book2.title;
const author2 = book2.author;
const yearOfPublication2 = book2.yearOfPublication;

const title3 = book3.title;
const author3 = book3.author;
const yearOfPublication3 = book3.yearOfPublication;

const bookInfo1 = `Tytuł: \"${title1}\", Autor: ${author1}, Rok wydania: ${yearOfPublication1}`;
const bookInfo2 = `Tytuł: \"${title2}\", Autor: ${author2}, Rok wydania: ${yearOfPublication2}`;
const bookInfo3 = `Tytuł: \"${title3}\", Autor: ${author3}, Rok wydania: ${yearOfPublication3}`;

const findOldestBook = function() {
    let oldestBook = ''
    const currentDate = new Date();
    let earliestYearOfPublication = currentDate.getFullYear();

    for(book of library.books) {
        if(book.yearOfPublication < earliestYearOfPublication) {
            earliestYearOfPublication = book.yearOfPublication;
            oldestBook = book.title;
        }
    }
    return oldestBook;
}

const oldestBook = findOldestBook();

const libraryInfo = `Biblioteka: \"${library.name}\" zawiera książki:
${bookInfo1},
${bookInfo2},
${bookInfo3}
Najstarsza książka: \"${oldestBook}\"`;

console.log(libraryInfo);
