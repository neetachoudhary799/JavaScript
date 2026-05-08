//inheritancs : it is define one class and used to other class can inherit through extends keyword.

//Example 1: Basic Inheritance
class Animal {
    eat() {
        console.log("Eating...");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Barking...");
    }   
}

let dog = new Dog();
dog.eat(); // Eating... (inherited from Animal)
dog.bark(); // Barking...

//Example 2: Method Overriding
class Cat extends Animal {
    eat() {
        console.log("Cat is eating...");
    }
}

let cat = new Cat();
cat.eat(); // Cat is eating... (overridden method)

//Example 3: Super Keyword
class Bird extends Animal {
    eat() {
        super.eat(); // Call parent class method
        console.log("Bird is eating...");
    }
}

let bird = new Bird();
bird.eat(); 
// Eating... (from Animal)
// Bird is eating... (from Bird)    


//Example 4: Inheritance with Constructor
class Person {
    constructor(name) {
        this.name = name;
    }   
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }   
}

class Student extends Person {
    constructor(name, grade) {
        super(name); // Call parent class constructor
        this.grade = grade;
    }   
    study() {
        console.log(`${this.name} is studying in grade ${this.grade}`);
    }   
}   

let student = new Student("Neeta", 10);
student.greet(); // Hello, my name is Neeta (inherited from Person)
student.study(); // Neeta is studying in grade 10 (from Student)


//Important Points to Remember
//👉 A class can only extend one parent class (no multiple inheritance).
//👉 The child class inherits all properties and methods of the parent class.
//👉 The child class can override methods of the parent class using the same method name.
//👉 The super keyword is used to call the parent class constructor