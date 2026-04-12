
let obj = {
  a: 10,
  b: 25,
  c: 5,
  d: 30
};

//first Method
console.log(findmaxval_first(obj));
function findmaxval_first(obj){
let getnumber= Object.values(obj);
return Math.max(...getnumber);
}

//second Method
console.log(findmaxval_second(obj));
function findmaxval_second(obj){
let getnumber= Object.values(obj);
return getnumber.reduce((acc,currentval)=> { 
    if(currentval>acc){ acc=currentval }else{ acc }
    return acc;
    },0);
}

//third Method(same as of anf foEach, filter)
console.log(findmaxval_third(obj));
function findmaxval_third(obj){
let getnumber= Object.values(obj);
let gethigh_number=getnumber[0];
 getnumber.filter((val,index)=> { 
   if(val > gethigh_number){
       gethigh_number =val;
   }
    });
    return gethigh_number;
}


//fourth method
let max_value2 = Object.values(obj).sort((a, b) => b - a)[0];
console.log(max_value2);

// In the above code, we use Object.values(obj) to get an array of the values in the object. Then we use the spread operator (...) to pass those values as individual arguments to the Math.max() function, which returns the maximum value among them. Finally, we log the maximum value to the console.   



// In the third method, we initialize a variable max_value to -Infinity, which is the smallest possible number. We then iterate through the values of the object using a for...of loop and compare each value to max_value. If we find a value that is greater than max_value, we update max_value to that value. After the loop, max_value will contain the maximum value from the object, which we then log to the console.



// In the second method, we use the reduce() method to iterate through the values of the object. The reduce() method takes a callback function that compares the current value with the maximum value found so far (max). If the current value is greater than max, we return the current value; otherwise, we return max. We also provide an initial value of -Infinity to ensure that any value in the object will be greater than it. After the reduce() method completes, max_value1 will contain the maximum value from the object, which we then log to the console.



// In the fourth method, we use Object.values(obj) to get an array of the values in the object. We then sort the array in descending order using the sort() method with a custom comparator function (b - a). After sorting, the maximum value will be at index 0 of the sorted array, which we access and log to the console.          
