console.log("1");

(function(){
    console.log("2")
})();

(()=>{
    console.log("3");
})();

console.log("4");

// Output:
// 1
// 2
// 3
// 4
