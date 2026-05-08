//primitive data types: string, number, boolean, null, undefined, symbol,bigint

//string
let name = "Neeta";
console.log(typeof name);

//number
let age = 25;
console.log(typeof age);

//boolean
let isStudent = true;
console.log(typeof isStudent);

//null
let emptyValue = null;
console.log(typeof emptyValue); //object (this is a known quirk in JavaScript)

//undefined
let notDefined;
console.log(typeof notDefined); //output: undefined

//symbol
let sym = Symbol("unique");
let sym2 = Symbol("unique");
console.log(sym === sym2); //output: false (each symbol is unique)
console.log(typeof sym); //output: symbol

//bigint
let bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue); //output: bigint