//Course: Advanced JavaScript Level 1
//Topic: Closure : Lexical Scope (its remember the outer function variable and use it in inner function even after the outer function is executed)


//solution 1
let result = cloursefun();
result();
//or  cloursefun()();

function cloursefun(){
    let name="neeta";
    let lastname="choudhary";
    let data= function(){
        console.log("my name is "+name+' '+lastname);
    } 
    return data;
}

//solution 2
cloursefun1();
function cloursefun1(){
    let name="neeta";
    function innerfunction(){
        console.log("my name is "+name);
    }
    return innerfunction();
} 