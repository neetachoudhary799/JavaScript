//async: asynchronous (it is a promise-based function).
// its automatically warped in a promise and it returns a promise. 
//we can handle it through .then() and .catch() methods.

//await: It can only be used inside an async function. 
// It makes the code look synchronous and easier to read.


//Example of async and await
async function fetchData(){
    try{
        let response=await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data=await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData().then(() => console.log("Data fetched successfully"))
.catch(error => console.error("Error in fetchData:", error));