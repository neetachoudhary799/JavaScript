let string_first="Neeta";
let string_second="aeena";

//first Step (we can not sort strng)
//we convert string to array(spilt method) then sort(only sort array )then convert to array to string(join method)
console.log(analog_first(string_first,string_second));
function analog_first(string_first,string_second){
    let first = string_first.toLowerCase().split('').sort().join('');
    let second = string_second.toLowerCase().split('').sort().join('');
    if(first === second){
        return true;
    }else{
        return false;
    }
}


//first count length(with sort)
//second count length (with sort)
//not match first and second false
//reduce first(acc,curerent,ndex=> current !=second[ndex] false
//Second Method
console.log(analog_second(string_first,string_second));
function analog_second(string_first,string_second){
    let first = string_first.toLowerCase().split('').sort();
    let second = string_second.toLowerCase().split('').sort();
    if(first.length != second.length){
        return false;
    }
    return first.reduce((acc,currentval,index)=>{
        console.log(currentval+' != ' +second[index]);
      if(currentval != second[index] ){
          return false;
      }
      return true
    },0)
}