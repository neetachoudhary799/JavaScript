//Ajax: Asynchronous JavaScript And XML
//Used to communicate with server without reloading the page
//AJAX is a technique used to send and receive data from a server asynchronously without refreshing the webpage.

//Real Examples
//Gmail inbox update
//Search suggestions
//Live chat
//Notifications


//oldtechnique
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

xhr.onload = function() {
    console.log(JSON.parse(xhr.responseText));
};

xhr.send();