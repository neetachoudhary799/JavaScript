let arr = [1,2,3,4,5,6,7];
let size = 2;

//first Method reduce
console.log(chunkarray(arr,size));
function chunkarray(arr,size){
    let i=0;
    let key =0 ;
    return arr.reduce((acc,currentval)=>{
        if(size <= i){
            i=0;
            key++;
        }
        if(size > i){
            acc[key] = acc[key] || [];
            acc[key].push(currentval)
           
        }
        i++;
        return acc;
    },[]);
}

//second Method foreach
console.log(chunkarray1(arr,size));
function chunkarray1(arr,size){
    let i=0;
    let key =0 ;
    let acc=[];
     arr.forEach((currentval,index)=>{
        if(size <= i){
            i=0;
            key++;
        }
        if(size > i){
            acc[key] = acc[key] || [];
            acc[key].push(currentval)
           
        }
        i++;
    });
    return acc;
}


//Third Method
console.log(chunkarray2(arr,size));
function chunkarray2(arr,size){
    let acc=[];
    for(let i=0;i<arr.length;i++){
        let key = Math.floor(i/size);
        acc[key] = acc[key] || [];
        acc[key].push(arr[i]);
    }
    return acc;
}

//fourth Method
let chunked = [];
for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
}
console.log(chunked);

// In the above code, we initialize an empty array chunked to store the resulting chunks. We then use a for loop that iterates through the input array arr in increments of size. Inside the loop, we use the slice() method to create a chunk of the array starting from index i and ending at index i + size (exclusive). We push this chunk into the chunked array. Finally, we log the chunked array to the console, which will contain the input array divided into chunks of the specified size.
