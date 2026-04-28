let array=[8,4,7,9,23,3,2,5];


//solution 1 find evennumber
console.log(findOddNumber1(array));
function findOddNumber1(array){
    let result = [];
   array.forEach((val)=>{
       if(val%2 !== 0){
           result.push(val);
       }
   })
   return result
}

//solution 2(reduce Mehod)
console.log(findOddNumber2(array));
function findOddNumber2(array){
  return array.reduce((acc,val)=>{
     if(val%2!==0){
         acc.push(val);
     } 
     return acc;
  },[])
}

//solution 3(filter Method)
console.log(findOddNumber3(array));
function findOddNumber3(array){
    return array.filter((val)=>{
        return val%2 !== 0;
    }
    )
}

//solution 4(for loop Method)
console.log(findOddNumber4(array));
function findOddNumber4(array){
    let result = [];
    for(let i = 0; i<=array.length-1;i++){
        if(array[i]%2 !== 0){
            result.push(array[i]);
        }
        return result;
    }
}