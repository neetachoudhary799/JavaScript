//function: reusable block of code that can be called multiple times.

function greet(name) {  //name is a (argument passed).
    console.log("Hello, " + name + "!");
}
//alice is a parameter.
//greet call a function.
greet("Alice"); // Output: Hello, Alice!
greet("Bob");   // Output: Hello, Bob!
greet("Charlie"); // Output: Hello, Charlie!


//correct way to define a function(define return)
function add(a,b){
    return a+b;
}
add(5,10); // Output: 15
let result = add(5,20);
console.log(result); // Output: 25


//pass argumnets to function unlimited.
//first method
function addAll(){
    let sum=0;
    for(let i=0;i<rguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
let rwesult1=addAll(5,10,15,20);
console.log(rwesult1); // Output: 50

//second method
function addAll1(...numbers){
    let sum=0;  
    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i];
    }   
    return sum;
}
let result2=addAll1(5,10,15,20);
console.log(result2); // Output: 50

