let array=[8,4,7,9,23,3,2,5];

//solution 1(Reduce Method)
console.log(findSmallestNumber1(array));
function findSmallestNumber1(array){
    return array.reduce((acc,val)=>{
        if(acc===0){acc=val;}
       if(acc > val) {
          acc =  val;
       }
       return acc;
    },0)
}

//solution 2(forEach Method)
console.log(findSmallestNumber2(array));
function findSmallestNumber2(array){
    let acc=array[0];
     array.forEach((val)=>{
       if(acc > val) {
          acc =  val;
       }
     })
       return acc;
}

//solution 3(forloop Method)
console.log(findSmallestNumber3(array));
function findSmallestNumber3(array){
    let acc=array[0];
    for(let i = 1; i<=array.length-1;i++){
       if(acc > array[i]) {
          acc =  array[i];
       }
        }
       return acc;
}

//solution 4(Math.min Method)
console.log(findSmallestNumber4(array));
function findSmallestNumber4(array){
    let result = Math.min(...array);
       return result;
}