let array=[1,2,4,5]

//solution 1
console.log(findMissingnumber1(array));
function findMissingnumber1(array){
   let len = array.length+1;
   let formula=(len*(len+1))/2;
   let add=array.reduce((acc,val)=>acc+val,0);
   let result = formula-add;
   return result;
}


//solution 2
console.log(findMissingnumber2(array));
function findMissingnumber2(array){
    let lenval=array.length+1;
    let sortval=array.sort((a,b)=>a-b);
    for(let i= 1;i<=lenval;i++){
        if(i != sortval[i-1]){
            return i;
        }
    }
}

//solution 3
console.log(findMissingnumber3(array));
function findMissingnumber3(array){
    let set = new Set(array);
for (let i = 1; i <= array.length + 1; i++) {
  if (!set.has(i)) {
   return i;
  }
}
}

//solution 4
console.log(findMissingnumber4(array));
function findMissingnumber4(array){
    let i = 1;
    for(let data of array){
        if(data !== i){
            return i;
        }
        i++;
    }
}
