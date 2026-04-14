let users = [
  { name: "A", age: 20 },
  { name: "B", age: 25 },
  { name: "C", age: 20 }
];

//first Method
console.log(groupitem(users));
function groupitem(userrs){
return userrs.reduce((acc,currentval,index)=>{
    acc[currentval.age] = acc[currentval.age] || [];
    acc[currentval.age].push(currentval);
    return acc
},{});
}




//second Method
let map = new Map();

users.forEach((val) => {
    if (!map.has(val.age)) {
        map.set(val.age, []);
    }
    map.get(val.age).push(val);
});

console.log(map);


//group by
let result=Object.groupBy(users,user=>user.age);
console.log(result);