//Function composition means combining two or more functions so that the output of one function becomes the input of another function.
//function composition
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}

compose(multiply, add)(2, 3); // returns 15
function compose(f, g) {
    return function (x, y) {    
        return f(g(x, y), g(x, y));
    };
}

//Arrow function composition
const addArrow = (a, b) => a + b;
const multiplyArrow = (a, b) => a * b;  
const composeArrow = (f, g) => (x, y) => f(g(x, y), g(x, y));
console.log(composeArrow(multiplyArrow, addArrow)(2, 3)); // returns 15