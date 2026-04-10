let orignal_array={
    name:"neeta",
    rollno:undefined,
    class_name:'',
    address:{
          city:"bangalore",
    },
  /* -- greet: function () {
   // return "Hello";
    },--*/
    date: new Date(),
    map: new Map([["a", 1]]),
    set: new Set([1, 2, 3])
};

// Deep copy is a technique used to create a new object that is a copy of an existing object, including all nested objects and arrays. This means that changes made to the new object will not affect the original object, and vice versa. Deep copying is important when you want to create a completely independent copy of an object, especially when dealing with complex data structures.
// In JavaScript, there are several ways to perform deep copying of objects and arrays. Here are some common methods:
// 1. Using JSON.parse(JSON.stringify()): This method converts the object to a JSON string and then parses it back to a new object. However, it has limitations, such as not being able to handle functions, undefined, Date objects, Map, Set, etc.
// 2. Using structuredClone(): This is a modern method that creates a deep copy of an object, including handling most data types. However, it does not support functions and will throw an error if you try to clone an object containing functions.
// 3. Using a custom recursive function: You can write your own function to recursively copy objects and arrays, which gives you more control over how different data types are handled.
// 4. Using libraries like Lodash: Libraries such as Lodash provide utility functions for deep cloning objects, which can handle a wide range of data types and edge cases.s
//first method  Using JSON.parse(JSON.stringify()) ⚠ Limitation:Removes undefined, function, Date, Map, Set  (not change original array not side effect) 
let data = JSON.parse(JSON.stringify(orignal_array));
data.name="hello";
data.address.city="abc";
console.log(data);
console.log(orignal_array);

//second method Using structuredClone() (Best & Modern ⭐)  Works for most cases (arrays, objects, nested data) ⚠ Limitation:error  function greet
let data1=structuredClone(orignal_array);
data1.name="hello1";
data1.address.city="abc1";
console.log(data1);
console.log(orignal_array);


