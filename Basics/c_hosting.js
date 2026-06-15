//Hoisting is a behavior in JavaScript where variables and function declarations are moved to the top of their scope before code execution.
// This means that you can use variables and functions before they are declared in the code.

// Example of hoisting with variables


console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5 


console.log(y); // Output: ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(y); // Output: 10   

let z;
console.log(z); // Output: undefined
z = 15;
console.log(z); // Output: 15

const c;
console.log(c); // Output: SyntaxError: Missing initializer in const declaration
c = 20;
console.log(c); // Output: 20   


// Example of hoisting with functions
greet();
function greet() {
    console.log("Hello, World!");
}
// Output: "Hello, World!"

// However, it's important to note that only the declarations are hoisted, not the initializations. 
// So if you try to access a variable before it is initialized, it will return undefined. 
// Similarly, if you try to call a function expression before it is defined, it will result in an error.

//Hosting

//syn 
console.log('a1'); //immediate output: 'a1'

//asyc web api
setTimeout(function(){ 
    console.log('a2'); //macro task 
});

 //sync
(function(){    
console.log('a3');  // Output: 'a3'
})();

//sync  micro task
new Promise((resolve, reject) => { 
    console.log('a4');
});
var data=new Promise((resolve, reject) => { 
    console.log('a5');
});
console.log('a8');
console.log('--------------------------------');

//function expression
let abc= async function myfun_1(){
    return 'a6_1';
}
async function myfun_2(){
    console.log('a6_2');
}
async function myfun_3(){
    return 'a6_3';
}
function myfunn(){
    console.log('a7');
}
 //sync
//console.log(myfunn()); 
console.log(abc());
myfun_2();
var myfun_3 =myfun_3();
console.log(myfun_3);
myfunn();
//abc();



