let nestedArray = [1, [2, 3], [4, [5, 6]], 7];

//solution 1
//flat(Infinity) → completely flat  
let flattenedArray = nestedArray.flat(Infinity);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6, 7]


//solution 2 recursion
console.log(recursionmethod(nestedArray));
function recursionmethod(nestedArray){
    let result = []
    for(let data of nestedArray){
        if(Array.isArray(data)){
            result = result.concat(recursionmethod(data))
        }else{
            result.push(data);
        }
    }
    return result;
}
