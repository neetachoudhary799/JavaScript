//Debounce delays function execution until user stops triggering it.
//👉 It is used to limit the rate at which a function is executed.

//improves performance
//avoids unnecessary API calls
//uses setTimeout + clearTimeout

let debounefun = deboune(serach,3000);

debounefun('N');
debounefun('Ne');
debounefun('Nee');
debounefun('Neet');
debounefun('Neeta');


function serach(name){
    console.log("your code is working successfully"+ name);
}

function deboune(serach,timeout){
    let timer;
    return function(...arg){
        clearTimeout(timer);
        timer= setTimeout(()=>{
            serach.apply(this,arg)
        },timeout);
    }
}