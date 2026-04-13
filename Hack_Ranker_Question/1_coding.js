//let collection=[1,3,4] and d =7 and (output[2,5])
//Find missing numbers from 1 → 7 → [2,5,6,7]
//Start adding them one by one
//Keep adding only if sum ≤ d (7)
//Stop when sum exceeds d
//Return numbers used before breaking
//Coding test in IBM
let collections=[1,3,4]
let d=7;


//first Step
console.log(alogothium(collections,d));
function alogothium(collections,d){
    let new_collection = [...new Set(collections)].sort((a,b)=>a-b);
    let result = [];
    for(let i=0;i<=7;i++){
        if(!new_collection.includes(i+1)){
            result.push(i+1);
        }
    }
    let add=0;
    let final_reult=[];
    result.forEach((val)=>{
        if(d > add){                
                add=add+val;
                final_reult.push(val);
        }
    });
    return final_reult;
    
}


//second Step 
console.log(alogothium_1(collections,d));
function alogothium_1(collections,d){
     let new_collection = [...new Set(collections)].sort((a,b)=>a-b);
    let result = [];
    let sum = 0;
    for(let i=1;i<=7;i++){
        if(d > sum){
        if(!new_collection.includes(i)){
           result.push(i);
           sum=sum+i;
        }
        }else{
            break;
        }
    }
    return result;
}


//third Step


let i = 1, j = 0;
let sum = 0;
let result = [];

while (i <= d) {
    if (collections[j] === i) {
        j++; // skip existing
    } else {
        if (sum + i <= d) {
            sum += i;
            result.push(i);
        } else {
            break;
        }
    }
    i++;
}

console.log(result);