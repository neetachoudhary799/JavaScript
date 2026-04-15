let obj = {
  name: "Neeta",
  age: 25,
  city: "Bangalore"
};

//first Method
console.log(convertobjtoarray(obj));
function convertobjtoarray(obj){
let key = Object.keys(obj)  //get only key
let value = Object.values(obj) //get only values
let result=Object.entries(obj) //get both key and values
return result;
}


//second Method
console.log(convertobjtoarray1(obj));
function convertobjtoarray1(obj){
    let result = [];
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            result.push([key,obj[key]]);
        }
    }
    return result;
}   


  