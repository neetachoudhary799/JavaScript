let array1=[1,2,3];
let array2=[4,5,6];

//solution 1
console.log(mergeArray1(array1,array2));
function mergeArray1(array1,array2){
    let result=array1.concat(array2);
    return result;
}

//solution 2
console.log(mergeArray2(array1,array2));
function mergeArray2(array1,array2){
    let newval=[];
    array1.forEach((val)=>{
    newval.push(val);
    })
    array2.forEach((val)=>{
    newval.push(val);
    })
return newval;
}

//solution 3
console.log(mergeArray3(array1,array2));
function mergeArray3(array1,array2){
let result=[...array1,...array2];
return result;
}