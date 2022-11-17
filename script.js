"use strict";
/* vad ska vi göra här*/

const bookList = [
    {id: 1, author: "Charles Dickens", title: "Oliver Twist"},
    {id: 2, author: "william Shakespear", title: "Hamlet"}
];
/*const searchField = document.children[0].children[1].children[1].children[1];*/
const searchField = document.getElementById("searchField");
/*keydown, keyup*/
searchField.addEventListener("keyup", handleKeyPress);

function handleKeyPress(e){
    /*  ta emot/läsa av värdet i fältet i inputfältet
        skicka värdet till searchBooks
        searchBooks retunerar en filtrerad lista
        filtrerade listan skickas till renderedBookList
    */
    searchBooks(e.target.value);
}

function searchBooks(searchTerm){
    /*  loopa igenom bookList, och för varje varv i loopen, ta det aktuella elementet (boken)
        jämnför titeln med söktermen
        om söktärmen finns någonstans i titeln, lägg till element i ny listan(filteredList)
        retunerar filteredList eller anroppar renderBookList
    */
    
    const filteredList = [];
    for(let i = 0; i < bookList.length; i++){
        const title = bookList[i].title.toLowerCase();

        if(title.indexOf(searchTerm.toLowerCase()) >= 0){
            console.log("match?");
            filteredList.push(bookList[i]);
        }
    }
    renderBookList(filteredList); 
}

function renderBookList(bookList){
    /* Elementet i HTML-listan visas/döljs beroende på listans innehåll. */
    let html = `<ul class="book-list rounded-md border-2 border-blue-400 bg-white w-full mx-auto">`;
    for(let i = 0; i < bookList.length; i++){
        html += `<li class="book-list_item mb-2 mx-2 last:mb-0 p-3 text-indigo-900 last:border-b-0 border-b border-indigo-700 cursor-pointer">
                ${bookList[i].author} - ${bookList[i].title}
                </li>`
    }
    html += `</ul>`;

    const existingElement = document.querySelector(".book-list");
    console.log(existingElement);
    const root = document.getElementById("root");
    if(existingElement){
        root.removeChild(existingElement);
    }
    const htmlElement = document.createElement("ul");
    root.insertAdjacentHTML("beforeend", html);

}
