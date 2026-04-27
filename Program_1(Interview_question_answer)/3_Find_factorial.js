let facNumber=5;

//solution 1
console.log(findFactorial1(facNumber));
function findFactorial1(facNumber){
    let result=1;
    for(let i =1;i<=facNumber;i++){
        result = result * i;
    }
    return result;
}

//solution 2
console.log(findFactorial2(facNumber));
function findFactorial2(facNumber){
     if(facNumber === 0) {return 1};
    return facNumber * findFactorial2(facNumber - 1);
}

//solution 3
console.log(findFactorial3(facNumber));
function findFactorial3(facNumber){
    let result = 1;
    for(let i = facNumber; i > 0; i--){
        result = result * i;
    }
    return result;
}

