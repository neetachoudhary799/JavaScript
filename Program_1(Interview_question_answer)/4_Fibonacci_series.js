let num=5;

//solution 1
console.log(Fibonacci1(num));
function Fibonacci1(num){
   let firstElement = 0;
   let secondElement=1;
   let result=[];
   for(let i =0; i<=num;i++){
        result.push(firstElement);
       [firstElement,secondElement]=[secondElement,secondElement + firstElement ]
   }
   return result.join(',');
}

//solution 2
console.log(Fibonacci2(num));
function Fibonacci2(num){
     
}