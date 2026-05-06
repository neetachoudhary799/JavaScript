//setTimeout: It is used to execute a function after a specified number of milliseconds.
//Syntax: setTimeout(function, delay)
setTimeout(function(){
    console.log("hello");
},2000);

//Important Points
//Important: Clear Them
//✅ Stop setTimeout
let id = setTimeout(() => {
    console.log("Hello");
}, 2000);
clearTimeout(id);


//setInterval: It is used to execute a function repeatedly at specified intervals (in milliseconds).(infinite loop)
//Syntax: setInterval(function, delay)
setInterval(function(){
    console.log("loop")
},2000);

//Stop setInterval
let id = setInterval(() => {
    console.log("Running...");
}, 1000);

setTimeout(() => {
    clearInterval(id);
}, 5000);

//setTimeout runs once, setInterval runs repeatedly.