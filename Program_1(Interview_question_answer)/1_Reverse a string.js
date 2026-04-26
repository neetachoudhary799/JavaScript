let string="Neeta";

//solution 1
//string is not work with syntax reverse firstly covert to array then reverse
console.log(reversestring1(string));
function reversestring1(string){
    let result= string.split('').reverse().join('');
    return result;
}

//solution 2
console.log(reversestring2(string));
function reversestring2(string){
    let result = '';
    for(let i= string.length-1; i >= 0;i--){
        result +=  string[i];
    }
    return result;
}

//solution 3
console.log(reversestring3(string));
function reversestring3(string){
    let result = [];
    for(let data of string){
       result.unshift(data);
    }
    return result.join('');
}

//solution 4
console.log(reversestring4(string));
function reversestring4(string){
    let result = string.split('');
    let left = 0;
    let right = result.length-1;
    while(left < right){
        let temp = result[left];
        result[left] = result[right];
        result[right] = temp;
        left++;
        right--;
    }   
    return result.join('');
}


//solution 5
console.log(reversestring5(string));
function reversestring5(string){
    let result = '';
    for(let i=0; i < string.length;i++){
        result = string[i] + result;
    }
    return result;
}

//solution 6
console.log(reversestring6(string));
function reversestring6(string){
    let result = '';
    for(let data of string){
        result = data + result;
    }
    return result;
}

//solution 7
console.log(reversestring7(string));
function reversestring7(string){
    let array = string.split('');
    return array.reduce((acc,val)=>{
        acc= val+acc;
        return acc;
    },'')
}