let array=[1,2,6,7,4,5,8,9]

//solution 1(sort change original array)
console.log(findLargestNumber1(array));
function findLargestNumber1(array){
   let sortval=array.sort((a,b)=>b-a);
   return sortval[1];
}


//solution 2
let array1=[1,2,6,7,4,5,8,9]
console.log(findSecondLargestNumber(array1));
function findSecondLargestNumber(array1){
    let firstval=array1[0];
    let secondval=0;
    array1.forEach((val)=>{
        if(val >= firstval){
            [secondval,firstval]=[firstval,val];
        }
    })
    return secondval;
}

//solution 3
let array2=[1,2,6,7,4,5,8,9]
console.log(findSecondLargestNumber2(array2));  
function findSecondLargestNumber2(array2){
    let firstval=array2[0];
    let secondval=0;
    for(let data of array2){
        if(data >= firstval){
            [secondval,firstval]=[firstval,data];
        }
    }
    return secondval;
}