const obj={
    name:"Neeta Rani",
    height:5.5,
    weight:60,
    age:25
}

console.log(obj); // Output: { name: 'Neeta Rani', height: 5.5, weight: 60, age: 25 }
console.log(obj.height); // Output: 5.5
delete obj.height; // Deletes the 'height' property from the object
console.log(obj); // Output: { name: 'Neeta Rani', weight: 60, age: 25 }
console.log(obj.height); // Output: undefined

const obj1=Object.create({
    name:"Dhriti",
    height:5.4,
    weight:55,
    age:22
});

console.log(obj1); // Output: {} (it stored the properties in the prototype)
console.log(obj1.name); // Output: "Dhriti"
delete obj1.name; // Deletes the 'name' property from the prototype, but it will still be accessible through the prototype chain
console.log(obj1.name); // Output: "Dhriti"