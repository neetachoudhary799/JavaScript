//👉 A Promise is an object that represents the result of an asynchronous operation
//it can handle through .then() and .catch() methods
//both the cases user can be subscribed either user can be rejected or resolved.
//multiple .then method can be defined.
//👉 It can be:

//⏳ Pending
//✅ Resolved (fulfilled)
//❌ Rejected

//Example of Promise
let promise=new Promise(function (resolve,reject){
    let status=true;
    if(status){
        resolve("successfully done operation");
    }else{
        reject("Error!");
    }
})

promise
.then(data=>console.log(data))
.catch(error=>console.log(error));


//multiple .then method can be defined
promise
.then(data=>{
    console.log(data);
    return "Next step";
})
.then(data=>console.log(data))
.catch(error=>console.log(error));


//changing method
promise
.then(data=>{
    console.log(data);
})

promise
.then(data=>{
    console.log("This is second then method");
})