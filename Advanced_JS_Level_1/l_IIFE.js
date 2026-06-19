//👉 Immediately Invoked Function Expression
//👉 A function that runs immediately after it is defined

(function() {
    console.log("Hello IIFE");
})();

//👉 Avoid global scope pollution
//👉 Create private variables
//👉 Run code immediately


//👉 Create private variables
(function() {
    let name = "Neeta";
    console.log(name);
})();
// console.log(name); ❌ Error (private)

(function(name) {
    console.log("Hello " + name);
})("Neeta");
//👉 Run code immediately

(function(){})()
//👉 Without them → syntax error ❌

(function add(a,b){
    let result = a+b;
    console.log("add two number"+result);
})(3,2);



/*---arrow---*/
(() => {console.log("IIFE using arrow");})();
((a,b) => {console.log(a+b)})(4,5);