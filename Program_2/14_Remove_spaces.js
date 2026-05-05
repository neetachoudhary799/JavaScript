let val="      My Name   is   Neeta     ";

//solution 1
console.log(removeSpace1(val));
function removeSpace1(val){
    let  result = val.trim();
    return result;
}

//solution 2
console.log(removeSpace2(val));
function removeSpace2(val){
    let array = val.split(' ');
    let result = [];
    array.forEach((val)=>{
        if(val){
            result.push(val);
        }
    })
    return result.join(' ');
}


let array=["  hello  ","Dhriti   "];
//first step  reduce
console.log(removespace(array));
function removespace(array) {
    return array.reduce((acc, currentval) => {
        acc.push(currentval.trim());
        return acc;
    }, []); // ✅ initial value must be an array
}

//second step map
console.log(removespace1(array));
function removespace1(array) {
    return array.map((val)=>val.trim());
}

//third step filter
console.log(removespace2(array));
function removespace2(array) {
    let newarray=[];
     array.filter((vall)=>{
         newarray.push(vall.trim());
     });
     return newarray;
}

//fourth step foreach
console.log(removespace3(array));
function removespace3(array) {
    let newarray_val=[];
     array.forEach((vall)=>{
         newarray_val.push(vall.trim());
     });
     return newarray_val;
}