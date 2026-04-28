let array=[8,4,7,9,23,3,2,5];

//solution 1(Reduce Method sum)
console.log(sum(array));
function sum(array){
    return array.reduce((acc,val)=>acc+val,0);
}
