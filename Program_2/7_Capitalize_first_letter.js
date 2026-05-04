let name="my name is neeta";

//solution 1
console.log(capitalizefirstData(name));
function capitalizefirstData(name){
    let output = '';
    let loop =name.split(' ');
    for(let data of loop){
        let newdata=data.replace(data[0],data[0].toUpperCase());
        output += newdata+' ';
    }
    return output;
}

//solution 2
console.log(capitalizefirstData2(name));
function capitalizefirstData2(name){
    let output = '';
    let loop =name.split(' ');
    for(let data of loop){
        let newdata=data.charAt(0).toUpperCase() + data.slice(1);
        output += newdata+' ';
    }
    return output;
}   

