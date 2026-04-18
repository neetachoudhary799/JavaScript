let string="programming";
//Input: "programming"
//Output: ["r", "g", "m"]


//first Method
console.log(duplicatestring1(string));
function duplicatestring1(string){
    let array =[];
    let duplicatevalue=[];
    for(let data of string){
        if(!array.includes(data)){
            array.push(data);
        }else{
            duplicatevalue.push(data);
        }
    }
    return duplicatevalue;
}

//second Method
console.log(duplicatestring2(string));
function duplicatestring2(string){
    let array = string.split('');
   let data = array.reduce((acc,val,index)=>{
        acc[val]=(acc[val] || 0) +1
       return acc; 
    },{})
    let res=Object.keys(data).filter(val => data[val]  > 1);
    return res;
}



