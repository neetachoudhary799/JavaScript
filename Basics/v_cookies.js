//cookies: A cookie is a small piece of data stored in the browser by a website.
//stored in key-value pair format(use string and JSON.stringify/parse for objects)
//used for:
//remember users
//authentication
//sessions
//tracking

//Cookies are small data stored in the browser and sent to the server with every HTTP request.

//Syntax: document.cookie = "key=value; expires=expiration_time; path=path; domain=domain; secure";

//set cookie
document.cookie = "name=Neeta; expires=Fri, 31 Dec 2029 23:59:59 GMT; path=/";
let obj={
    user_name:"Dhriti",
    age:4       
}
document.cookie = "obj=" + JSON.stringify(obj) + "; expires=Fri, 31 Dec 2029 23:59:59 GMT; path=/";

//get cookie
let cookieValue = document.cookie;
console.log(cookieValue.anchor("name")); //name=Neeta
console.log(cookieValue.anchor("obj")); //obj={"user_name":"Dhriti","age":4}

//delete cookie
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
console.log(document.cookie.anchor("name")); //null (cookie deleted)

//update cookie
document.cookie = "name=Dhriti; expires=Fri, 31 Dec 2029 23:59:59 GMT; path=/";
console.log(document.cookie.anchor("name")); //name=Dhriti (cookie updated)
