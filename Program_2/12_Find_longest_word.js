let array=["hello","world","hi","welcome","to","javascript"];

//solution 1
console.log(findlongestword(array));
function findlongestword(array){
return array.reduce((acc,val)=>{
   let len=val.length;
   if(len > acc){
       acc=len;
   }
   return acc;
},0);
}

//solution 2
console.log(findlongestword1(array));
function findlongestword1(array){
let result=0;
array.forEach((val)=>{
    let vallen=val.length;
    if(vallen > result){
        result=vallen
    }
})
return result;
}

//solution 3
console.log(findlongestword2(array));
function findlongestword2(array){
    let newval=0;
    return array.filter(val=>val.length> newval? newval=val.length:'' )
}

//solution 4
console.log(findlongestword3(array));
function findlongestword3(array){
    return array.sort((a,b)=>b.length-a.length)[0].length;
}       

//  solution 5
console.log(findlongestword4(array));
function findlongestword4(array){
    return Math.max(...array.map(val=>val.length));
}   