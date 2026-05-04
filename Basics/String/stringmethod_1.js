//1)length
//2)trim()
//3)toUpperCase()
//4)toLowerCase()
//5)concat()
//6)includes()
//7)indexOf()
//8)lastIndexOf()
//9)split()
//10)replace()
//11)for of loop and for in loop
//12)array.from()
//13)string.fromCharCode()
//14)string.fromCodePoint()


//1)length → returns the length of a string
let str = "Hello, World!";
console.log(str.length); // Output: 13

//2)trim() → removes whitespace from both ends of a string
let str2 = "   Hello, World!   ";
console.log(str2.trim()); // Output: "Hello, World!"

//3)toUpperCase() → converts a string to uppercase letters
let str3 = "Hello, World!";
console.log(str3.toUpperCase()); // Output: "HELLO, WORLD!"

//4)toLowerCase() → converts a string to lowercase letters
let str4 = "Hello, World!";
console.log(str4.toLowerCase()); // Output: "hello, world!"

//5)concat() → concatenates two or more strings and returns a new string
let str5 = "Hello, ";
let str6 = "World!";
console.log(str5.concat(str6)); // Output: "Hello, World!"

//6)includes() → determines whether a string contains a specified substring, returning true or false as appropriate
let str7 = "Hello, World!";
console.log(str7.includes("World")); // Output: true
console.log(str7.includes("world")); // Output: false (case-sensitive)  

//7)indexOf() → returns the index of the first occurrence of a specified substring, or -1 if it is not found
let str8 = "Hello, World!";
console.log(str8.indexOf("World")); // Output: 7
console.log(str8.indexOf("world")); // Output: -1 (not found, case-sensitive)

//8)lastIndexOf() → returns the index of the last occurrence of a specified substring, or -1 if it is not found
let str9 = "Hello, World! Hello!";
console.log(str9.lastIndexOf("Hello")); // Output: 14
console.log(str9.lastIndexOf("world")); // Output: -1 (not found, case-sensitive)

//9)split() → splits a string into an array of substrings based on a specified separator
let str10 = "Hello, World!";
console.log(str10.split(", ")); // Output: ["Hello", "World!"]

//10)replace() → returns a new string with some or all matches of a pattern replaced by a replacement
let str11 = "Hello, World!";
console.log(str11.replace("World", "Universe")); // Output: "Hello, Universe!"

//11)for of loop and for in loop
let str12 = "Hello";
for (let char of str12) {
  console.log(char); // Output: H e l l o (each character on a new line)
}   

for (let index in str12) {
  console.log(index); // Output: 0 1 2 3 4 (each index on a new line)
}

//12)String.fromCharCode() → returns a string created from the specified sequence of UTF-16 code units
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"
//13)String.fromCodePoint() → returns a string created from the specified sequence of code points
console.log(String.fromCodePoint(72, 101, 108, 108, 111)); // Output: "Hello"

//14)Array.from() → creates a new, shallow-copied Array instance from an array-like or iterable object
let str13 = "Hello";
let arrFromString = Array.from(str13);
console.log(arrFromString); // Output: ["H", "e", "l", "l", "o"]




