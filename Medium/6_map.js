//map:  data store key and value pair
//Map is a built-in JavaScript object that stores key-value pairs where keys can be of any data type.


//👉 Keys can be:
//string
//number
//object
//function

//Method	
//set()	add
//get()	read
//has()	check
//delete()	remove

let map=new Map();

//set 
console.log(map.set("name","Neeta")); //Map(1) {'name' => 'Neeta'}
console.log(map.set("age","33")); //Map(2) {'name' => 'Neeta', 'age' => '33'}
console.log(map);  ////Map(2) {'name' => 'Neeta', 'age' => '33'}


//get
console.log(map.get("name"));   //Neeta

//has
console.log(map.has("age")); //true

//delete
console.log(map.delete("age")); //true

//Convert Map → Array
let arr = [...map];

//Convert Array → Map
let array=[
    ["name", "Neeta"],
    ["age", 25]
];
let mapp=new Map(array);