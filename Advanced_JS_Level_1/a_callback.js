//A callback is a function passed as an argument to another function, and it is executed later.

//example
function greet(name, callback) {
    console.log("Hello " + name);
    callback(); // calling callback
}

function bye() {
    console.log("Bye!");
}

greet("Neeta", bye);

//Example of a callback function
function greet(name) {
    console.log("Hello, " + name + "!");
}
function processUserInput(callback) {
    let name = "Alice";
    callback(name);
}
processUserInput(greet); // Output: Hello, Alice!