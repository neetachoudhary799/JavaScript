myFunc();
var myFunc = function() {  //function expression
    console.log("1");
}

myFunc(); // Output: ReferenceError: Cannot access 'myFunc' before initialization

function myFunc() {  //function declaration
    console.log("2");
}

myFunc(); 

//output: 2 1 1

// In the above code, we are trying to call the function 'myFunc' before it is defined. 
// This results in a ReferenceError because 'myFunc' is in the Temporal Dead Zone (TDZ) until it is declared with 'let'. 
// The TDZ is the time between entering the scope and the actual declaration of the variable. 
// During this time, the variable cannot be accessed, and any attempt to do so will result in an error.