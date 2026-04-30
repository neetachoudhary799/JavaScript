//forEach :forEach() is used to loop through an array and execute a function for each element.

//Syntax: array.forEach(callback(currentValue, index, array), thisArg)
//callback: A function to execute on each element in the array. It takes three arguments:
//  - currentValue: The current element being processed in the array.
//  - index: The index of the current element being processed in the array.
//  - array: The array forEach was called upon.

//Note: The forEach() method does not return a value. It is used for its side effects, such as modifying the original array or performing actions based on the elements of the array.

//we push the code on array and show values
//❌ Cannot use break or continue

//Example: Print each element of an array
let arr = ['a', 'b', 'c', 'd'];
arr.forEach((element) => {
  console.log(element);
});

console.log(foreachdata(arr));
function foreachdata(arr){
    let newarr=[];
    arr.forEach((element)=>{
        newarr.push(element.toUpperCase());
    })
    return newarr;
}