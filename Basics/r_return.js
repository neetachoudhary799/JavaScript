//👉 return is used to send a value back from a function
//👉 It also stops the function execution

//Example 1: Basic return
function add(a,b){
    return a+b;
}
console.log(add(2,3)); //5

//Example 2: Return stops execution
function checkEven(num){
    if(num % 2 === 0){
        return "Even";
    }
    return "Odd";
}
console.log(checkEven(4)); //Even
console.log(checkEven(5)); //Odd

//Important Point
//👉 After return, nothing runs
function test() {
    console.log("Start");
    return;
    console.log("End"); // ❌ never runs
}
test(); 

//Return Without Value
function test() {
    return;
}
console.log(test()); // undefined

//Return Object
function getUser() {
    return {
        name: "Neeta",
        age: 25
    };
}
console.log(getUser()); // { name: 'Neeta', age: 25 }

//Common Mistake (Important 🔥)
function wrong() {
    return
    {
        name: "Neeta"
    }
}
console.log(wrong()); // undefined
//👉 JavaScript inserts a semicolon after return, so it returns undefined instead of the object.

const sum = (a, b) => a + b;
console.log(sum(2, 3)); // 5