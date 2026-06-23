let firstselected = 'x';
let arr=Array(9).fill(null);
function checkWinner(arr,firstselected){
  
    if(
        (arr[0] === firstselected && arr[1] === firstselected && arr[2] === firstselected) ||
        (arr[3] === firstselected && arr[4] === firstselected && arr[5] === firstselected) ||
        (arr[6] === firstselected && arr[7] === firstselected && arr[8] === firstselected) ||
        (arr[0] === firstselected && arr[4] === firstselected && arr[8] === firstselected) ||
        (arr[2] === firstselected && arr[4] === firstselected && arr[6] === firstselected) ||
        (arr[0] === firstselected && arr[3] === firstselected && arr[6] === firstselected) ||
        (arr[1] === firstselected && arr[4] === firstselected && arr[7] === firstselected) ||
        (arr[2] === firstselected && arr[5] === firstselected && arr[8] === firstselected) 
    ){
        console.log("you are winner "+firstselected);
        document.body.innerHTML="you are winner "+firstselected;
    }
    let isFull = arr.every(value => value !== null);
    if(isFull){
        setTimeout(function(){
        document.body.innerHTML="Draw..";
        },1000)
    }
}
function handleClick(ele){
    console.log(arr);
    let val=arr[ele.id];
    if(val == 'x' || val == '0'){
        return false;
    }
    console.log(ele);
    ele.innerHTML  = firstselected;
    arr[ele.id]=firstselected;
    checkWinner(arr,firstselected);
    firstselected = firstselected === 'x' ? '0' : 'x';
    
}