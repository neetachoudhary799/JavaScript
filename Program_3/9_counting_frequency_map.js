let arr = [1,1,2,3];

let map = new Map();

for (let num of arr) {
    map.set(num, (map.get(num) || 0) + 1);
}

console.log(map);