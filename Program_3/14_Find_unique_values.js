let array=[1,1,2,3,4,3];

//first method
console.log(finduniquenumber1(array));
function finduniquenumber1(array){
   return array.reduce((acc,val)=>{
        acc=[...new Set(array)]; 
        return acc;
    },[]);
}

//second Method
console.log(finduniquenumber2(array));
function finduniquenumber2(array){
    let removeunique=[];
    let findunique =[];
    array.forEach((val)=>{
      if(!removeunique.includes(val)){
          removeunique.push(val);
      }else{
         findunique.push(val);
      }
    });
    return removeunique;
}

//Third Method
console.log(finduniquenumber3(array));
function finduniquenumber3(array){
let unique = array.filter((val, index) => {
   //console.log(array.indexOf(val));
    return array.indexOf(val) === index;
});
return unique;
}