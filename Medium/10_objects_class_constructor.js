//Class Contrutor
//After ES6
//it is main purpose to use constructor and intailize values . its execute first.
//easy to understand
//output behaviour is same as function contructor.

class Person{
  constructor(fname,lname,contact){
   this.fname=fname;
   this.lname=lname;
   this.contact=contact;
  }

  getName(){
    console.log(this.fname);
  }

  getContact(){
    console.log(this.contact);
  }
}

const p1= new Person("neata","Rani","9875456");
console.log(p1.getName());
console.log(p1.fname);
