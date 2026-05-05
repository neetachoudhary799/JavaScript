//primise API:
//1)settled
//2)allsetled
//3)race
//4)any

//settled
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);   
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise 2 rejected");
    }, 1000);   
});

Promise.allSettled([promise1, promise2])
.then(results => {
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`Promise ${index + 1} resolved with value: ${result.value}`);
        } else {
            console.log(`Promise ${index + 1} rejected with reason: ${result.reason}`);
        }
    });
});

//output:
//Promise 1 resolved with value: Promise 1 resolved
//Promise 2 rejected with reason: Promise 2 rejected


//allsetled
Promise.all([promise1, promise2])
.then(results => {
    console.log("All promises resolved:", results); 
})
.catch(error => {
    console.log("At least one promise rejected:", error); 
});

//output:
//At least one promise rejected: Promise 2 rejected


//race
Promise.race([promise1, promise2])
.then(result => {
    console.log("First promise resolved:", result); 
})
.catch(error => {
    console.log("First promise rejected:", error); 
});

//output:
//First promise rejected: Promise 2 rejected

//any
Promise.any([promise1, promise2])
.then(result => {   
    console.log("First promise resolved:", result); 
})
.catch(error => {
    console.log("All promises rejected:", error); 
});

//output:
//First promise resolved: Promise 1 resolved