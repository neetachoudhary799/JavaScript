//fetch() is a built-in JavaScript Web API used to make asynchronous HTTP requests and returns a Promise.
//prebuilded function in browser
//uses web API
//fetch() is used to get data from server
//fetch() is based on Promises, so it allows us to handle asynchronous operations more easily and efficiently.
//use cases get, post, put, delete
//Syntax: fetch(url, options)

//get data from server 
let urll = "https://jsonplaceholder.typicode.com/posts";
async function dataget(urll){
    try {
        let data  = await fetch(urll);
        let result = await data.json();
        return result; // ✅ IMPORTANT
    } catch(error){
        console.log(error);
        throw error; // optional
    }
}

//dataget(urll)
  //  .then(data => console.log(data))
  //  .catch(error => console.log(error));

//get single data
let url1= "https://jsonplaceholder.typicode.com/posts/1";
async function getSingleData(url1){
    try{
        let data= await fetch(url1);
        let result= await data.json();
        return result;    
    }
    catch(error){
        console.log(error);
        throw error; //optional
    }
}
getSingleData(url1)
.then(data=>console.log(data))
.catch(error=>console.log(error));

//add data  to server
let payload={
    title:'Neeta',
    body:'this is dummy data',
    userId: 11
}
async function addData(payload){
    let url11 = "https://jsonplaceholder.typicode.com/posts";
    try{
        let data=await fetch(url11,{
            method:"POST",
            body:JSON.stringify(payload),
            headers:{'content-type':'application/json'}
        })
        let result = await data.json();
        return result;
       
    }
    catch(error){console.log(error);
        throw error; //optional
    }
}   
//addData(payload)
//.then(data=>console.log(data))
//.catch(error=>console.log(error));


//put data to server
let payLoadupdate={
    title:'neeta',
    body:'test data',
    userId:11,
    id:1
}

async function updateData(payLoadupdate){
    let url2="https://jsonplaceholder.typicode.com/posts/1";
    try{
        let data= await fetch(url2,{
            method:'PUT',
            body:JSON.stringify(payLoadupdate),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
       let result= await data.json();
       return result;
    }catch(error){
        console.log(error);
        throw error; //optional
    }
}
//updateData(payLoadupdate)
//.then(data=>console.log(data))
//.catch(error=>console.log(error));

//delete data from server
let id =2;

async function deleteData(id){
    let url3=`https://jsonplaceholder.typicode.com/posts/${id}`;
    try{
        let data=await fetch(url3,{
            method:'DELETE'
        })
        let result = await data.json();
        return result;

    }catch(error){
        console.log(error);
        throw error; //optional
    }
}
//deleteData(id)
//.then(data=>console.log(data))
//.catch(error=>console.log(error));