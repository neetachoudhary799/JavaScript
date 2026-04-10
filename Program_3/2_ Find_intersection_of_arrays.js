let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];

//first method foreach
// The forEach() method executes a provided function once for each array element. In this case, we use it to iterate through each value in arr1 and then for each value, we iterate through arr2 to check for matches. If a match is found (i.e., if val is equal to secval), we push the matching value into the matcharrayval array. This method is straightforward but can be less efficient than other methods due to the nested loops.
console.log(findmatchval(arr1,arr2));
function findmatchval(arr1,arr2){
    let matcharrayval = [];
    arr1.forEach((val)=>{
        arr2.forEach((secval)=>{
            if(val == secval){
                matcharrayval.push(secval);
            }
        })
    })
    return matcharrayval;
}

//first method reduce
// The reduce() method executes a reducer function on each element of the array, resulting in a single output value. In this case, we use it to accumulate the matching values from arr1 that are also present in arr2. The accumulator (acc) starts as an empty array, and for each current value (currentval) in arr1, we check if it is included in arr2. If it is, we push it to the accumulator. Finally, we return the accumulated array of matching values.
console.log(findmatchval1(arr1,arr2));
function findmatchval1(arr1,arr2){
   return  arr1.reduce((acc,cuurentval)=>{ 
       if(arr2.includes(cuurentval)){
           acc.push(cuurentval)
       }
       return acc;
   },[]);
}

//third method filter
// The filter() method creates a new array with all elements that pass the test implemented by the provided function. In this case, we use it to check if each element of arr1 is included in arr2, and if so, we include it in the resulting array. This method is more concise and often more efficient than using nested loops or reduce for this purpose.
console.log(findmatchval2(arr1,arr2));
function findmatchval2(arr1,arr2){
    let matcharray=[];
     arr1.filter((val)=>{ 
       if(arr2.includes(val)){
           matcharray.push(val)
       }
     });
       return matcharray;
}
