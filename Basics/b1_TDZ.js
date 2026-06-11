//TDZ : Temporal Dead Zone

age=30;
console.log(age); // Output: ReferenceError: Cannot access 'age' before initialization
let age=20; 
console.log(age); // Output: 20

// In the above code, we are trying to access the variable 'age' before it is declared and initialized. 
// This results in a ReferenceError because 'age' is in the Temporal Dead Zone (TDZ) until it is declared with 'let'. 
// The TDZ is the time between entering the scope and the actual declaration of the variable. 
// During this time, the variable cannot be accessed, and any attempt to do so will result in an error.

