const abc = {
    name:"neeta",
    getName:function(){
        return this.name;
    }
}

const xyz={
    name:"Dhriti",
    getNAme:function(){
        return this.name;
    }
}

function getName(){
    return this.name;
}   

//call: immediate call
abc.getName.call(xyz); // Output: "Dhriti"
getName.call(xyz); // Output: "Dhriti"


//bind: returns a new function with the specified 'this' value and arguments.
const boundGetName = abc.getName.bind(xyz);
boundGetName(); // Output: "Dhriti"
boundGetName(); // Output: "Dhriti"

const boundGetName2 = getName.bind(xyz);
boundGetName2(); // Output: "Dhriti"


setTimeout(abc.getName, 1000); // Output: undefined (because 'this' refers to the global object in this context)
setTimeout(abc.getName.bind(xyz), 1000); // Output: "Dhriti" (because 'this' is bound to 'xyz')
setTimeout(boundGetName, 1000); // Output: "Dhriti" (because 'this' is already bound to 'xyz')