let arr = [1, 2, 2, 3, 1, 4, 2];

//first method foreach correct but slower Your method is O(n²) because of nested loops.
let newarry=[...new Set(arr)];
console.log(findoccurence(arr,newarry));
function findoccurence(arr,newarry){
    let newarry_result=[];
    newarry.forEach((matchval)=>{
        let count = 0;
            arr.forEach((val,index)=>{
            if(matchval === val){
            count++;
            }
            });
       newarry_result.push({ [matchval]: count });
    })
    return newarry_result;
}


//Second Method reduce Optimized using reduce() (O(n))
console.log(findoccuerence1(arr));
function findoccuerence1(arr){
    return arr.reduce((acc,currentval,index,array)=>{
        acc[currentval] = (acc[currentval] || 0) + 1;
    return acc;
    },{})
}

//Third Method using Map Optimized using Map (O(n))
console.log(findoccuerence2(arr));
function findoccuerence2(arr){      
    let countMap = new Map();
    arr.forEach((val)=>{
        countMap.set(val, (countMap.get(val) || 0) + 1);
    });     
    let result = {};
    countMap.forEach((count, val) => {
        result[val] = count;
    });
    return result;
}