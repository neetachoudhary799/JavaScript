//object in javascript
//Advantage: Simple
//Disadvantage : It does not behave like ble,not create object w,its means we define again and agian

const person ={
    fname:"neeta",
    lastname:"rani",
    contact:"9788788",
    getName:function(){
        console.log(this.fname)
    }
}

const person1 ={
    fname:"Dhriti",
    lastname:"Choudahry",
    contact:"9788788",
    getName:function(){
        console.log(this.fname)
    }
}

console.log(person.fname);
console.log(person.getName());


//Old Method: constructor function
//two types
//Normal Function->camaelCasing (Standlone function ) its perform function.
//example: getAge(),addNums(),printThis()

//function construtor: PascalCasing
//it is old Method to define constructor function
//It is responsible for create a object.
//  It behave like as blueprint,Its motive we create object and define values mulptiple times.
//First Letter is capital(Example: Person)

//Normal Function
function getAge(){
    console.log("25");
}
getAge();

////function construtor

function Students(fname,lname,contact){
    this.fname=fname;
    this.lname=lname;
    this.contact=contact;
    this.getName=function(){
        console.log(this.fname);
    }
    this.getContact=function(){
        console.log(this.contact);
    }
}
const p1=new Students("neeta","Rani","9877888");
const p2=new Students("Dhriti","Rani","9877888");
console.log(p1.getContact());
//p1 means ki p1 ne Students ka object bna liya

//after that its comes new technique ES6 Class constructor


