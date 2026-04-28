let array=[8,4,2,9,3,3,2,5];

//solution 1(remove duplicate val)
console.log(removeDuplicateval1(array));
function removeDuplicateval1(array){
   let result=[...new Set(array)];
   return result;
}

//solution 2(reduce Mehod)
console.log(removeDuplicateval2(array));
function removeDuplicateval2(array){
   return array.reduce((acc,val)=>{
      if(!acc.includes(val)){
          acc.push(val);
      } 
      return acc
   },[])
}

//solution 3
console.log(removeDuplicateval3(array));
function removeDuplicateval3(array){
  let data = [];
  array.forEach((val)=>{
      if(!data.includes(val)){
          data.push(val);
      } 
  })
  return data;
}

//solution 4(filter Method)
console.log(removeDuplicateval4(array));
function removeDuplicateval4(array){
    return array.filter((val,index)=>{
        return array.indexOf(val) === index;
    })
}

//solution 5(for loop Method)
console.log(removeDuplicateval5(array));
function removeDuplicateval5(array){
    let data = [];
    for(let i = 0; i<=array.length-1;i++){
        if(!data.includes(array[i])){
          data.push(array[i]);
      }
      return data;
}
}
