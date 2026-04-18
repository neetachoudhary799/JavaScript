let array=[1,2,3,4,5,6];

//First Method
console.log(sumarray1(array));
function sumarray1(array){
   return array.reduce((acc,val)=>acc+val,0);
}


//Second Method
console.log(sumarray2(array));
function sumarray2(array){
    let result=0;
    array.forEach((val,index)=>{
        result=val+result;
    })
    return result;
}

//Third Method.
console.log(sumarray3(array));
function sumarray3(array){
   let result=0;
   for(let i=0;i<=array.length-1;i++){
       result=result+array[i];
   }
   return result;
}

//Fourth Method
console.log(sumarray4(array));
function sumarray4(array){
    let result=0;
    for(let val of array){
        result=result+val;
    }
    return result;
}

//Fifth Method
console.log(sumarray5(array));
function sumarray5(array){
    let result=0;
    for(let i in array){
        result=result+array[i];
    }
    return result;
}

//Sixth Method
console.log(sumarray6(array));
function sumarray6(array){
    let result=0;
    let i=0;
    while(i<=array.length-1){
        result=result+array[i];
        i++;
    }
    return result;
}

//Seventh Method
console.log(sumarray7(array));
function sumarray7(array){
    let result=0;
    let i=0;
    do{
        result=result+array[i];
        i++;
    }while(i<=array.length-1);
    return result;
}           


//Eight Method
console.log(sumarray8(array));
function sumarray8(array){
    let result=0;
    array.map(val=>result=result+val);
    return result;
}

//Ninth Method
console.log(sumarray9(array));
function sumarray9(array){
   let result=0;
  array.filter((val)=>result=result+val);
   return result;
}

let string="145";
//first Method
console.log(sumstring1(string));
function sumstring1(string){
 let result=0;
   for(let i=0;i<=string.length-1;i++){
      let data=Number(string[i]);
      result= result+data;
   }
   return result;
}

//second Method
console.log(sumstring2(string));
function sumstring2(string){
    let convertarray=string.split("");
    return  convertarray.reduce((acc,val)=>Number(acc)+Number(val),0);
}

//third Method
console.log(sumstring3(string));
function sumstring3(string){
    let result = 0;
    for(let data of string){
       result = result + Number(data);
    }
    return result;
}

//fourth Method
console.log(sumstring4(string));
function sumstring4(string){
    let convertarray=string.split("");
    let result = 0;
    convertarray.map((val)=>{
        result= result+Number(val);
    })
    return result;
}

//fifth Method
console.log(sumstring5(string));
function sumstring5(string){
    let result = 0;
    for(let i in string){
        result = result + Number(string[i]);
    }

    return result;
}

