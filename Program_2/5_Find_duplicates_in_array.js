let array = [2,3,4,2,6,4,6,8];

//solution 1
console.log(findduplicate1(array));
function findduplicate1(array){
    let findduplicate=[];
    let unique=[];
    array.forEach((val)=>{
        if(!unique.includes(val)){
            unique.push(val);
        }
        else{
            findduplicate.push(val);
        }
    });
    return findduplicate;
}

//solution 2
console.log(findduplicate2(array));
function findduplicate2(array){
    let unique=[];
    return  array.reduce((acc,val)=>{
          if(!unique.includes(val)){
            unique.push(val);
        }
        else{
            acc.push(val);
        }
        return acc;
    },[])
}

//solution 3
console.log(findduplicate3(array));
function findduplicate3(array){
    let i =0;
    let dulpicate=[];
    for(let data of array){
        if(array.indexOf(data) !== i){
            dulpicate.push(data);
        }
        i++;
    }
    return dulpicate;
}

//solution 4
console.log(findduplicate4(array));
function findduplicate4(array){
    return array.filter((item,index)=>{
        return array.indexOf(item) !== index;
    }
    );
}