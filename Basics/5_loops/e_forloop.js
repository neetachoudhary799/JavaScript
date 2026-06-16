//forloop : A for loop is used to repeat a block of code multiple times.
//no trturn value, we push the code on array and show values
//Syntax: for (initialization; condition; increment/decrement) {
//  // code to be executed
//}

//Example: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Example: Print even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {        
    console.log(i);
    }
}

//Example: Print elements of an array
let arr = ['a', 'b', 'c', 'd'];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}   