let string="Hello world from JS dfdf ffd";

//first Method
console.log(countwords1(string));
function countwords1(string){
    let count=string.split(" ").length;
    return count;
}

//second Method
console.log(countwords2(string));
function countwords2(string){
    let array=string.split(" ");
    return array.reduce((acc,val,index)=>{
        return index+1;
    },1);
}

//third Method
console.log(countwords3(string));
function countwords3(string){
    let array=string.split(" ");
    let i =0;
     array.forEach((val)=>{
      i++;
    });
    return i;
}

//fourth Method
console.log(countwords4(string));
function countwords4(string){
    let array=string.split(" ");
    let count=0;
    for(let val of array){
        count++;
    }
    return count;
}