"use strict";

let bookList = [];

window.addEventListener("load", () => {
    getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener("keyup", (e) => searchBooks(e.target.value));
/*searchField.addEventListener("keyup", (e) => 
    renderBookList(
        bookList.filter(({title, author}) => {
            const searchTerm = e.target.value.toLowerCase();
            return title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 || author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
        })
    )
);*/

async function searchBooks(searchTerm){
    const bookList = await getAll();
    renderBookList(
        bookList.filter(
            ({title, author}) => 
            title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 || 
            author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
        )
    );
}

function renderBookList(bookList){
    /* Elementet i HTML-listan visas/döljs beroende på listans innehåll. */

    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);

    const root = document.getElementById("root");

    existingElement && root.removeChild(existingElement);
    
    bookList.length > 0 && searchField.value && root.insertAdjacentHTML("beforeend", BookList(bookList));
}