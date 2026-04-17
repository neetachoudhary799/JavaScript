let string = "neeta";

//First Method
console.log(convertstringtoarray(string));
function convertstringtoarray(string){
    let result=string.split('');
    return result;
}

//Second Method
console.log(convertstringtoarray1(string));
function convertstringtoarray1(string){
    let result = Array.from(string);
    return result;
}

//Third Method
console.log(convertstringtoarray2(string));
function convertstringtoarray2(string){
    let result = [...string];
    return result;
}

//Fourth Method
console.log(convertstringtoarray3(string));
function convertstringtoarray3(string){
    let result = string.match(/./g);
    return result;
}

//Fifth Method
console.log(convertstringtoarray4(string));
function convertstringtoarray4(string){
    let result = [];    
    for(let char of string){
        result.push(char);
    }   
    return result;
}

//Sixth Method
console.log(convertstringtoarray5(string));
function convertstringtoarray5(string){
    let result = [];
    for(let i=0;i<string.length;i++){
        result.push(string[i]);
    }
    return result;
}

//seventh Method
console.log(convertstringtoarray6(string));
function convertstringtoarray6(string){
    let result = [];
    for(let i in string){
        result.push(string[i]);
    }
    return result;
}

//Eighth Method
console.log(convertstringtoarray7(string));
function convertstringtoarray7(string){
    let result = [];
    for(let char of string){
        result[result.length] = char;
    }
    return result;
}

//Ninth Method
console.log(convertstringtoarray8(string));
function convertstringtoarray8(string){
    let result = [];
    for(let i=0;i<string.length;i++){
        result[result.length] = string[i];
    }
    return result;
}