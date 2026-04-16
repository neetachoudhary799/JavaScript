let arr = [5, 10, 15, 20 ,7];

let result = arr.findIndex(num => num > 12);//count postion index (two bigger then return 2)
console.log(result);

let result1 = arr.findIndex(num => num === 12); // check position (no value then return -1)
console.log(result1);

let result2 = arr.findIndex(num => num === 5 ); //check postion index(return 0 index)
console.log(result2);

let result3 = arr.findIndex(num => num === 7 ); //check postion index(return 4 index)
console.log(result3);