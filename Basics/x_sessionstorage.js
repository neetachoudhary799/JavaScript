//It is used to store data in sessionStorage. It takes two parameters: key and value.
//sessionStorage stores data in temporary storage for a single browser session.
//it is format "string" only // use JSON.stringify/parse for objects
//tab-specific(current tab only)
//sessionStorage is similar to localStorage, but the data stored in sessionStorage is only available on the current page. it will not work on other tabs or windows.
//data stored in sessionStorage is cleared when the page session ends (when the browser tab is closed)


//syntax: session
//sessionStorage.setItem(key, value);
//sessionStorage.getItem(key);
//sessionStorage.removeItem(key);
//sessionStorage.clear();

//add data to sessionStorage
sessionStorage.setItem("name","Neeta");
seessionStorage.setItem("age",25);

//get data from sessionStorage.
let name=sessionStorage.getItem("name");
let age = sessionStorage.getItem("age");
console.log(name); //Neeta
console.log(age); //25

//remove data from sessionstorage
let removeName=sessionStorage.removeItem("name");
console.log(sessionStorage.getItem("name")); //null

//clear all data from sessionStorage
sessionStorage.clear();
console.log(sessionStorage.getItem("age")); //null  



//Data is removed when:
//tab/browser closes ❌