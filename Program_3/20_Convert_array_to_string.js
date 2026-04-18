let array = [ 'n', 'e', 'e', 't', 'a' ]

//First Method
console.log(convertarraytostring(array));
function convertarraytostring(array){
    let result=array.join("");
    return result;
}


//Second Method
console.log(convertarraytostring1(array));  
function convertarraytostring1(array){
    let result = array.reduce((acc,currentval)=>{
        return acc + currentval;
    },''); 
    return result;
}

//Third Method
console.log(convertarraytostring2(array));  
function convertarraytostring2(array){
    let result = '';
    for(let char of array){
        result += char;
    }
    return result;
}   

//Fourth Method
console.log(convertarraytostring3(array));      
function convertarraytostring3(array){
    let result = '';
    for(let i=0;i<array.length;i++){
        result += array[i];
    }
    return result;
}

//Fifth Method
console.log(convertarraytostring4(array));
function convertarraytostring4(array){
    let result = '';
    for(let i in array){
        result += array[i];
    }
    return result;
}

//Sixth Method
console.log(convertarraytostring5(array));
function convertarraytostring5(array){
    let result = '';
    for(let i=0;i<array.length;i++){
        result = result.concat(array[i]);
    }
    return result;
}

//Seventh Method
console.log(convertarraytostring6(array));
function convertarraytostring6(array){
    let result = '';
    for(let char of array){
        result = result.concat(char);
    }   
    return result;
}

   