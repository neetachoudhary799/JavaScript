//prototype: Prototype is a core JavaScript concept
//Every JavaScript object has a prototype.
// A prototype is also an object. 
// All JavaScript objects inherit their properties and methods from their prototype.
//👉 In JavaScript, every object has a hidden property called [[Prototype]]
//👉 It allows objects to inherit properties and methods from another object

//Prototype is a mechanism in JavaScript by which objects can inherit properties and methods from other objects.

//Why use Prototype?
//👉 Memory efficient
//👉 Method is shared, not duplicated

//Example of prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}   
Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
}
let person1 = new Person("Alice", 30);
let person2 = new Person("Bob", 25);
person1.greet();
person2.greet();
//output:
//Hello, my name is Alice and I am 30 years old.
//Hello, my name is Bob and I am 25 years old.

//In this example, the greet method is defined on the Person prototype, so both person1 and person2 can access it without having their own copy of the method. This is memory efficient and allows for shared behavior among instances of the Person constructor.
