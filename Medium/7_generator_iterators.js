//iterator: An iterator is an object that allows sequential access to values.
//done: true
//means iteration finished ✔️
//output shows {value:10,Done:true/fasle}

let array = [1,2,3];
let iterator= arr[Symbol.iterator]();

console.log(iterator.next()); //output {value:1,Done:fasle}
console.log(iterator.next()); //output {value:2,Done:fasle}
console.log(iterator.next()); //output {value:3,Done:fasle}
console.log(iterator.next()); //output {value:undefined,Done:true}


//Generator : A Generator is a special function that can:
//pause execution
//resume later
//use function *
//A generator is a special function that can pause and resume execution using the yield keyword.
//function*	generator function
//yield	pause execution
//next()	resume execution
//done: true
//means Generator finished ✔️
//output shows {value:"Hello",Done:true/fasle}

function* greet() {
    console.log("Start");
    yield "Hello";
    console.log("Middle");
    yield "Neeta";
    console.log("End");
}

let gen = greet();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

