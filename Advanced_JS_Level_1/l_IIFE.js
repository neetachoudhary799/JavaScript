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