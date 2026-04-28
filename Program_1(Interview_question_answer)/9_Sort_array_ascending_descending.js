let array=[8,4,7,9,23,3,2,5];
let array1=[8,4,7,9,23,3,2,5];

//solution 1(sort change original array)asc
console.log(ascOrder1(array));
function ascOrder1(array){
   let result=array.sort((a,b)=>a-b);
   return result;
}

//solution 2(reduce Mehod)
console.log(descOrder2(array1));
function descOrder2(array1){
  let result=array.sort((a,b)=>b-a);
   return result;
}



let names = ["Banana", "Apple", "Cherry"];
names.sort();
console.log(names);