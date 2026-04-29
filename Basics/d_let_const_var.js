//These are used to declare variables, but they behave differently.

//var : function-scoped ,global-scoped, can be re-declared and updated
//let : block-scoped , can be updated but not re-declared
//const : block-scoped, immutable, cannot be updated or re-declared

if (true) {
  var a = 5;
}
console.log(a); // 5 ❌ (leaks outside block)


let a = 5;
a = 10; // ✅ Allowed to update
console.log(a); // 10
let a = 20; // ❌ Error


const a = 5;
a = 10; // ❌ Error

//const with objects/arrays
const arr = [1, 2];
arr.push(3); // ✅ allowed
console.log(arr); // [1, 2, 3]
arr = [4, 5]; // ❌ not allowed