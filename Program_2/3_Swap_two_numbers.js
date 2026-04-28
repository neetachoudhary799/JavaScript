let a =5;
let b=3;

//solution 1
console.log(swapNumber1(a,b));
function swapNumber1(a,b){
    [a,b]=[b,a]
    return {a,b};
}

//solution 2
console.log(swapNumber2(a,b));
function swapNumber2(a,b){
    c=a;
    a=b;
    b=c;
   return [a,b];
}