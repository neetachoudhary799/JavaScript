let obj = {};

//first step
//console.log(obj);
console.log(findemptyobj1(obj));
function findemptyobj1(obj){
    let result = Object.keys(obj).length === 0;
    return result;
}

//second step
console.log(findemptyobj2(obj));
function findemptyobj2(obj){
    let result = Object.entries(obj).length === 0;
    return result;
}

//third Method
console.log(findemptyobj3(obj));
function findemptyobj3(obj){
     for (let key in obj) {
        return false;
    }
    return true;
}

//fourth Method
console.log(findemptyobj4(obj));    
function findemptyobj4(obj){
    let result = JSON.stringify(obj) === '{}';
    return result;
}


//fifth Method
console.log(findemptyobj5(obj));        
function findemptyobj5(obj){
    let result = Object.getOwnPropertyNames(obj).length === 0;
    return result;
}

//sixth Method
console.log(findemptyobj6(obj));
function findemptyobj6(obj){
    let result = Object.values(obj).length === 0;
    return result;
}

