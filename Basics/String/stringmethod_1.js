//1)length
//2)trim()
//3)toUpperCase()
//4)toLowerCase()
//5)concat()
//6)includes()  ------true or false
//7)split()
//8)replace()
//9)for of loop and for in loop
//10)array.from()
//11)string.fromCharCode()
//12)string.fromCodePoint()
//13)slice()




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


//7)split() → splits a string into an array of substrings based on a specified separator
let str10 = "Hello, World!";
console.log(str10.split(", ")); // Output: ["Hello", "World!"]

//8)replace() → returns a new string with some or all matches of a pattern replaced by a replacement
let str11 = "Hello, World!";
console.log(str11.replace("World", "Universe")); // Output: "Hello, Universe!"

//9)for of loop and for in loop
let str12 = "Hello";
for (let char of str12) {
  console.log(char); // Output: H e l l o (each character on a new line)
}   

for (let index in str12) {
  console.log(index); // Output: 0 1 2 3 4 (each index on a new line)
}

//10)String.fromCharCode() → returns a string created from the specified sequence of UTF-16 code units
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"
//11)String.fromCodePoint() → returns a string created from the specified sequence of code points
console.log(String.fromCodePoint(72, 101, 108, 108, 111)); // Output: "Hello"

//12)Array.from() → creates a new, shallow-copied Array instance from an array-like or iterable object
let str13 = "Hello";
let arrFromString = Array.from(str13);
console.log(arrFromString); // Output: ["H", "e", "l", "l", "o"]

//13)slice() → extracts a section of a string and returns it as a new string, without modifying the original string
let str14 = "Hello, World!";
console.log(str14.slice(0, 5)); // Output: "Hello" (from index 0 to index 5, not included)
console.log(str14.slice(7, 12)); // Output: "World" (from index 7 to index 12, not included)    
console.log(str14.slice(7)); // Output: "World!" (from index 7 to the end of the string)
console.log(str14.slice(-6)); // Output: "World!" (from index -6 to the end of the string)






