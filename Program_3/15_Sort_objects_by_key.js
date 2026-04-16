let obj = [
  {name: "Neeta", age: 25},
  {name: "Amit", age: 20},
  {name: "Ravi", age: 30}
];
let obj1 = [
  {name: "Neeta", age: 25},
  {name: "Amit", age: 20},
  {name: "Ravi", age: 30}
];

//first Method sort age ->number (change  original array)
console.log(findkeys(obj));
function findkeys(objj){
   let result = objj.sort((a,b)=>a.age-b.age);
   return result;
}

//second Method sort name ->string
console.log(findkeys1(obj1));
function findkeys1(obj){
  let result=obj.sort((a,b)=>a.name.localeCompare(b.name)) 
    return result ;
}