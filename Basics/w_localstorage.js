
//these information is stored on web storage.
//key-value pair
//data is stored in string format only use JSON.stringify/parse for objects.
//it survives system/browser restart  refresh page other tab .
// Storage limit is usually around 5–10 MB (depends on browser).


//add data to localStorage
localStorage.setItem("name","Neeta");
localStorage.setItem("age",25);
let obj={
    user_name:"Dhriti",
    age:4
}
localStorage.setItem("obj",JSON.stringify((obj)));


//get data from localStorage.
let name=localStorage.getItem("name");
let age=localstorage.getItem("age");
console.log(name); //Neeta
console.log(age); //25
let obj1=JSON.parse(localStorage.getItem(obj));
console.log(obj1);// { user_name: 'Dhriti', age: 4 }

//remove data from localStorage
let removeName=localStorage.removeItem("name");
console.log(localStorage.getItem("name")); //null

//clear all data from localStorage
localStorage.Clear();
console.log(localStorage.getItem("age")); //null

//Data is not removed when:
//browser refresh ✅
//other tab ✅  
//system/browser restart ✅




