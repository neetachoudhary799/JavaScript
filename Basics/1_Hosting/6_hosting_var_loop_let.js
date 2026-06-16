for(var i =0; i< 5;i++){
    setTimeout(function(){
    console.log(i);  // Output: 5, 5, 5, 5, 5
    })
}

for(let i = 0;i< 5;i++){
  setTimeout(function(){
    console.log(i);  // Output: 0, 1, 2, 3, 4
    })  
}