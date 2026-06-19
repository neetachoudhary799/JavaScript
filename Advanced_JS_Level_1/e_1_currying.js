//currying: is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions that each take a single argument. It allows you to create new functions by partially applying arguments to an existing function. 
//normal function currying
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(add(2)(3)(4));
//Modern Arrow Function:
const multiply = a => b => c => a * b * c;