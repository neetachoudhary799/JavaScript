//The event loop is a mechanism that allows JavaScript (single-threaded) to handle asynchronous operations.

//1. "Start" → call stack
//2. setTimeout → Web API
//3. "End" → call stack
//4. Timeout callback → queue
//5. Event loop → moves to stack

//macro task: setTimeout, setInterval, setImmediate, I/O, UI rendering(least priority)
//micro task: Promise, process.nextTick, MutationObserver(first priority)

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise");
});

console.log("End");

//output:
//Start
//End
//Inside Promise
//Inside setTimeout


//1. Call Stack (Execute code  synchronously)
//2. Web API (Handle asynchronous operations)(setTimeout, setInterval, DOM events, etc.)
//3. Callback Queue (Store callbacks of asynchronous operations)
//4. Event Loop (Move callbacks from queue to stack when stack is empty)