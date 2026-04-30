//synchronous: code run line by line, and each line waits for the previous one to finish before executing.
//asynchronous: code can run independently of the main program flow.

// synchronous code example(simple function call, loops, etc.,prompt, alert, etc.)
function syncFunction() {
    console.log("This is a synchronous function.");
}
syncFunction();
console.log("This will run after the synchronous function.");


// asynchronous code example(setTimeout,Promise, async/await,fetch, event listeners, etc.)
function asyncFunction() {
    setTimeout(() => {
        console.log("This is an asynchronous function.");
    }, 1000);
}
asyncFunction();
console.log("This will run before the asynchronous function."); 