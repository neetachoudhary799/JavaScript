let array=[ [ 'name', 'Neeta' ], [ 'age', 25 ], [ 'city', 'Bangalore' ] ];

//first Method
console.log(convertarraytoobject(array));
function convertarraytoobject(array){
   return array.reduce((acc,currentval,key)=>{
       acc[key] = currentval;
        return acc;
    },{})
}

//second Method
console.log(convertarraytoobject1(array));
function convertarraytoobject1(array){
   let result= Object.fromEntries(array);
   return result;
}