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


//Generator : 


