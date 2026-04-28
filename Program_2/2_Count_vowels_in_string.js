let string ="neeta";

//solution 1
console.log(findVowels1(string));
function findVowels1(string){
    let vowel="aeiou";
    let result=[];
    for(let data of string){
        if(vowel.includes(data)){
            result.push(data);
        }
    }
    return result.length > 0 ? result : "No vowel found";
}

//solution 2 
console.log(findVowels2(string));
function findVowels2(string){
    let vowel="aeiou";
    let array =string.split('');
   return array.reduce((acc,val)=>{
       if(vowel.includes(val)){
           acc.push(val);
       }
       return acc.length > 0 ? acc : "No vowel found";
    },[])
}


//solution 3
console.log(findVowels3(string));
function findVowels3(string){
    let vowel="aeiou";
    let array =string.split('');  
    let count = 0;
     array.forEach((val)=>{
         if(vowel.includes(val)){  
             count++;
         }
     });
     return count;
}
