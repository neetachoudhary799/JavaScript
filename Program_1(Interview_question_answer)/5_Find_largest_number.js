let array=[2,4,7,9,23,3,4,5];

//solution 1(Reduce Method)
console.log(findLargestNumber1(array));
function findLargestNumber1(array){
    return array.reduce((acc,val)=>{
       if(acc < val) {
          acc =  val;
       }
       return acc;
    },0)
}

//solution 2(forEach Method)
console.log(findLargestNumber2(array));
function findLargestNumber2(array){
    let acc=array[0];
     array.forEach((val)=>{
       if(acc < val) {
          acc =  val;
       }
     })
       return acc;
}

//solution 3(forloop Method)
console.log(findLargestNumber3(array));
function findLargestNumber3(array){
    let acc=array[0];
    for(let i = 1; i<=array.length-1;i++){
       if(acc < array[i]) {
          acc =  array[i];
       }
        }
       return acc;
}