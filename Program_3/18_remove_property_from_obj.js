let obj = {
  name: "Neeta",
  age: 25,
  city: "Bangalore"
};
let obj1 = {
  name: "Neeta",
  age: 25,
  city: "Bangalore"
};

//first Method(change original object)
console.log(removeobj(obj));
function removeobj(objj){
    delete objj.age;
    return objj;
}

//second Method
console.log(removeobj1(obj1));
function removeobj1(obj){
    let {age,...rest} = obj;
    return rest;
}

//third Method
console.log(removeobj2(obj));   
function removeobj2(obj){
    let result = Object.fromEntries(Object.entries(obj).filter(([key]) => key !== 'age'));
    return result;
}


//fifth Method
console.log(removeobj3(obj1));
function removeobj3(obj){
    let result = JSON.parse(JSON.stringify(obj));
    delete result.age;
    return result;
}


