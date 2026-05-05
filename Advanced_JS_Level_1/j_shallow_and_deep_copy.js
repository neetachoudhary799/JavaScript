// Shallow Copy(only copies the top-level properties)
let obj1 = { a: 1, b: 2,c: { d: 3 } };
let obj2 = { ...obj1 }; // or Object.assign({}, obj1)
obj2.c.d = 4;
console.log(obj1.c.d); // Output: 4 (original object is affected due to shallow copy)


// Deep Copy(copies all levels of nested objects)
let obj3 = { a: 1, b: { c: 2 } };
// Method 1: Using JSON.parse and JSON.stringify (works for simple objects without functions or special types)
let obj4 = JSON.parse(JSON.stringify(obj3));
obj4.b.c = 3;
console.log(obj3.b.c); // Output: 2 (original object remains unchanged)
// Note: JSON method has limitations (e.g., it doesn't handle functions, undefined, or circular references)

// Method 2: structuredClone (modern browsers)(handles more complex objects)
let obj5 = structuredClone(obj3);
obj5.b.c = 4;
console.log(obj3.b.c); // Output: 2 (original object remains unchanged) 
// Note: structuredClone is a built-in method that creates a deep copy of an object, including handling circular references and special types.

// Method 3: Using a custom recursive function (handles all types of objects)
let obj6 = { a: 1, b: { c: 2 } };
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj; // Return the value if obj is not an object}
    }
    let copiedObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copiedObj[key] = deepCopy(obj[key]); // Recursively copy nested objects
        }   
    }
    return copiedObj;
}