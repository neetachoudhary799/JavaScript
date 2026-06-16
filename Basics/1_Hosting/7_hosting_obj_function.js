var fullName = "John Doe";

let obj={
    fullName:"Neeta Rani",

    prop:{
        fullName:"Dhriti",
        getFullName:function(){
            return this.fullName;
        }
    },

    getFullName:function(){
        return this.fullName;
    },

    getFullNameArrow:()=> this.fullName,  // Arrow functions do not have their own 'this' context, so it will refer to the global object (window in browsers) where 'fullName' is "John Doe".

    getFullNameArrow1:()=> obj.fullName, 

    getfullNamefunction: (function() {
        return this.fullName;  // In a regular function, 'this' refers to the object that calls the function. However, since this function is immediately invoked, 'this' will refer to the global object (window in browsers) where 'fullName' is "John Doe".
    })(),

}
console.log(obj.fullName); // Output: Neeta Rani
console.log(obj.prop.getFullName()); // Output: Dhriti
console.log(obj.getFullName()); // Output: Neeta Rani
console.log(obj.getFullNameArrow()); // Output: undefined
console.log(obj.getFullNameArrow1()); // Output: Neeta Rani
console.log(obj.getfullNamefunction()); // Output: undefined
