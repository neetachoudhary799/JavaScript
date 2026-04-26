let string="neteaten";

// solution 1
console.log(checkPalidrome1(string));
function checkPalidrome1(string){
    let firstelement = string.length - 1 ;
    //console.log(firstelement);
    let divide = firstelement/2;
    for(let i=0;i<= divide; i++){
        //console.log(string[i] +'!=='+ string[firstelement])
        if(string[i] !== string[firstelement]){
            return false;
        }
        firstelement--;
    }
    return true;
}

//solution 2
console.log(checkPalidrome2(string));
function checkPalidrome2(string){
   let arr = string.split('');
  let len = arr.length;

  return arr.reduce((acc, val, index) => {
    if (!acc) return false; // stop logic manually

    if (index < len / 2) {
      return val === arr[len - 1 - index];
    }

    return acc;
  }, true);
}

//solution 3
console.log(checkPalidrome3(string));
function checkPalidrome3(string){
    let left = 0;
    let right = string.length - 1;
    while(left < right){
        if(string[left] !== string[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

//solution 4
console.log(checkPalidrome4(string));
function checkPalidrome4(string){
    let reverse = string.split('').reverse().join('');
    return string === reverse;
}