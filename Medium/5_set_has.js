//set.has  : true/false
//set.has() checks whether a value exists inside a Set
//set.has(value)
//Returns:
//true ✔️ if value exists
//false ❌ if not

//👉 Set stores:
//only unique values
//no duplicates

//Method:
//add()	add value
//has()	check value
//delete()	remove value
//clear()	remove all

let arr=[1,2,3,4];
let set = new Set(arr);
let newset=new Set();

//has check
console.log(set.has(2)); // true
console.log(set.has(10)); // false

//add value
console.log(set.add(5)); //output: Set(5) {1, 2, 3, 4, 5}
console.log(newset.add(1)); //output Set(1) {1}

//delete
console.log(set.delete(2));  //output true
console.log(set); //output : Set(4){1,3,4,5}

//clear
console.log(set.clear());    //output :true
console.log(set); //output : Set(0){size:0}

//find duplicate
let array = [1,2,3,2,4,1];
let set1=new Set();
let duplicate=[];
array.forEach(val=>{
    if(set1.has(val)){
            duplicate.push(val);
    }else{
        set1.add(val);
    }
})
console.log(set1);
console.log(duplicate);
