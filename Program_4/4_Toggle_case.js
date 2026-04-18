//Input:  "NeEtA"
//Output: "nEeTa"

let string="NeEeeeetA";

//first Method push
console.log(togglemethod1(string));
function togglemethod1(string){
    let array=[];
    for(let data of string){
        if(data === data.toUpperCase()){
            let val= data.toLowerCase();
            array.push(val);
        }else{
            let valupper = data.toUpperCase();
            array.push(valupper);
            
        }
    }
    return array.join('');
}

//second Method +
console.log(togglemethod2(string));
function togglemethod2(string){
    let resultstring='';
    for(let data of string){
        if(data === data.toUpperCase()){
            let val= data.toLowerCase();
            resultstring += val;
        }else{
            let valupper = data.toUpperCase();
            resultstring += valupper;
            
        }
    }
    return resultstring;
}

//third Method concat
console.log(togglemethod3(string));
function togglemethod3(string){
    let resultstring='';
    for(let data of string){
        if(data === data.toUpperCase()){
            let val= data.toLowerCase();
            resultstring = resultstring.concat(val);
        }else{
            let valupper = data.toUpperCase();
            resultstring = resultstring.concat(valupper);
            
        }
    }
    return string+'---Toggle vale---'+resultstring;
}


//fourth Method
console.log(togglemethod3(string));
function togglemethod3(string){
    let array=string.split('');
    let resultstring = array.reduce((acc,val)=>{
        if(val === val.toUpperCase()){
            acc += val.toLowerCase();
        }else{
            acc += val.toUpperCase();
        }
        return acc;
    },'')
        
    return string+'---Toggle vale---'+resultstring;
}

//fifth Method
console.log(togglemethod4(string));
function togglemethod4(string){
    let array=string.split('');
    let resultstring = array.reduce((acc,val)=>{
        if(val === val.toUpperCase()){
            return acc + val.toLowerCase(); 
        }else{
            return acc + val.toUpperCase(); 
        }
    },'')
        
    return string+'---Toggle vale---'+resultstring;
}

