let array=[8,4,7,9,23,3,2,5];


//solution 1 find evennumber
console.log(findEvenNumber1(array));
function findEvenNumber1(array){
    let result = [];
   array.forEach((val)=>{
       if(val%2 === 0){
           result.push(val);
       }
   })
   return result
}

//solution 2(reduce Mehod)
console.log(findEvenNumber2(array));
function findEvenNumber2(array){
  return array.reduce((acc,val)=>{
     if(val%2===0){
         acc.push(val);
     } 
     return acc;
  },[])
}

//solution 3(filter Method)
console.log(findEvenNumber3(array));
function findEvenNumber3(array){
    return array.filter((val)=>{
        return val%2 === 0;
    }
    )
}

//solution 4(for loop Method)
console.log(findEvenNumber4(array));
function findEvenNumber4(array){
    let result = [];
    for(let i = 0; i<=array.length-1;i++){
        if(array[i]%2 === 0){
            result.push(array[i]);
        }
        return result;
    }
}
