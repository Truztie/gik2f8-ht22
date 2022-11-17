"use strict";
/* vad ska vi göra här*/

const bookList = [
    {id: 1, author: "Charles Dickens", title: "Oliver Twist"},
    {id: 2, author: "william Shakespear", title: "Hamlet"}
];
const searchInput = null;

function handleKeyPress(input){
    /*  ta emot/läsa av värdet i fältet i inputfältet
        skicka värdet till searchBooks
        searchBooks retunerar en filtrerad lista
        filtrerade listan skickas till renderedBookList
    */
    searchBooks(input);
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

function renderBookList(list){
    /* Elementet i HTML-listan visas/döljs beroende på listans innehåll. */
    console.log(list)
}
handleKeyPress("e");
