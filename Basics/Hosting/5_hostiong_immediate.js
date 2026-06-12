variable = "1";
num = 10;

(function(){
    console.log(variable);   // Output: undefined
    console.log(foo);        // Output: undefined
    console.log(num);        // Output: 10
    var foo = "2";
    var variable = "3";
    num = 20;
    console.log(variable);   // Output: "3"
    console.log(foo);        // Output: "2"
})();

(()=>{
    console.log("3");
})();

console.log("4");

