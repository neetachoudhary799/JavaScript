arr1 = [1, 2, 3, 4];
arr2 = [3, 4, 5, 6];

//solution 1
console.log(intersection1(arr1,arr2));
function intersection1(arr1,arr2){
    let result=[];
    arr1.forEach((val)=>{
        if(arr2.includes(val)){
            result.push(val);
        }
    })
    return result;
}

//solution 2
console.log(intersection2(arr1,arr2));
function intersection2(arr1,arr2){
   return arr1.reduce((acc,val)=>{
        if(arr2.includes(val)){
            acc.push(val)
        }
        return acc;
    },[])
}