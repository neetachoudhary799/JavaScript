//1)length
//2)trim()
//3)toUpperCase()
//4)toLowerCase()
//5)concat()
//6)includes()  ------true or false
//7)split()
//8)replace()
//9)replaceAll()
//10)for of loop and for in loop
//11)array.from()
//12)string.fromCharCode()
//13)string.fromCodePoint()
//14)slice()
//15)substring()
//16)substr()




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
let str11 = "Hello, World! Hello!";
console.log(str11.replace("Hello", "Universe")); // Output: "Universe, World! Hello!" (only the first occurrence of "Hello" is replaced)

//9)replaceAll() → returns a new string with all matches of a pattern replaced by a replacement
let str111 = "Hello, World! Hello!";
console.log(str111.replaceAll("Hello", "Hi")); // Output: "Hi, World! Hi!"
console.log(str111.replaceAll("o", "0")); // Output: "Hell0, W0rld! Hell0!"
console.log(str111.replaceAll("o", "0", 5)); // Output: "Hell0, World! Hello!" (replace only the first 5 occurrences of "o")  

//10)for of loop and for in loop
let str12 = "Hello";
for (let char of str12) {
  console.log(char); // Output: H e l l o (each character on a new line)
}   

for (let index in str12) {
  console.log(index); // Output: 0 1 2 3 4 (each index on a new line)
}

//1)String.fromCharCode() → returns a string created from the specified sequence of UTF-16 code units
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // Output: "Hello"
//12)String.fromCodePoint() → returns a string created from the specified sequence of code points
console.log(String.fromCodePoint(72, 101, 108, 108, 111)); // Output: "Hello"

//13)Array.from() → creates a new, shallow-copied Array instance from an array-like or iterable object
let str13 = "Hello";
let arrFromString = Array.from(str13);
console.log(arrFromString); // Output: ["H", "e", "l", "l", "o"]

//14)slice() → extracts a section of a string and returns it as a new string, without modifying the original string
let str14 = "Hello, World!";
console.log(str14.slice(0, 5)); // Output: "Hello" (from index 0 to index 5, not included)
console.log(str14.slice(7, 12)); // Output: "World" (from index 7 to index 12, not included)    
console.log(str14.slice(7)); // Output: "World!" (from index 7 to the end of the string)
console.log(str14.slice(-6)); // Output: "World!" (from index -6 to the end of the string)

//15)substring() → returns a subset of a string between one index and another, or through the end of the string
let str15 = "Hello, World!";
console.log(str15.substring(0, 5)); // Output: "Hello" (from index 0 to index 5, not included)
console.log(str15.substring(7, 12)); // Output: "World" (from index 7 to index 12, not included)
console.log(str15.substring(7)); // Output: "World!" (from index 7 to the end of the string)
console.log(str15.substring(-6)); // Output: "Hello, World!" (negative index is treated as 0)

//16)substr() → returns a portion of a string, starting at the specified index and extending for a given number of characters afterwards
let str16 = "Hello, World!";
console.log(str16.substr(0, 5)); // Output: "Hello" (from index 0, length 5)
console.log(str16.substr(7, 5)); // Output: "World" (from index 7, length 5)
console.log(str16.substr(7)); // Output: "World!" (from index 7 to the end of the string)
console.log(str16.substr(-6, 5)); // Output: "World" (from index -6, length 5)







