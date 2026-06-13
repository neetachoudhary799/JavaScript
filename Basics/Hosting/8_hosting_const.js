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

abc.getName(); // Output: "neeta"
abc.getName.call(xyz); // Output: "Dhriti"

getName(); // Output: undefined (in strict mode) or the global object (in non-strict mode)
getName.call(xyz); // Output: "Dhriti"