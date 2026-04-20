let string="   neeta      Choudahry  ";

//solution 1
console.log(remove_space(string));
function remove_space(string){
    //string.trimStart(); (Left Side)  o/p     neeta
    //string.trimEnd(); (Right side)   o/p neeta
    let result = string.trim();
    return result;
}

//solution 2
console.log(remove_space1(string));
function remove_space1(string){
    let result = string.split(' ');
    let array = [];
    result.forEach((val)=>{
        if(val){
            array.push(val)
        }
    });
    return array.join(' ');
}


//solution 3
console.log(remove_space2(string)); 
function remove_space2(string){
    let result = string.split(' ');
    let array = result.filter((val)=>{
        if(val){
            return val;
        }                                           
    });
    return array.join(' ');
}   

//solution 4
console.log(remove_space3(string));
function remove_space3(string){
    let result = string.split(' ');
    let array = result.reduce((acc,val)=>{
        if(val){
            acc.push(val);
        }
        return acc;
    },[]);
    return array.join(' ');
}