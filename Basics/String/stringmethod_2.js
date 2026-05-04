//1)indexOf()-------Important--
//2)lastIndexOf()
//3)charAt()
//4)repeat() -------Important--
//5)startWitth()
//6)endsWith()


//indexOf() → returns the index of the first occurrence of a specified value in a string, or -1 if it is not found
let str = "Hello, World!";
console.log(str.indexOf("World")); // Output: 7
console.log(str.indexOf("world")); // Output: -1 (not found, case-sensitive)
console.log(str.indexOf("o")); // Output: 4 (first occurrence of "o")
console.log(str.indexOf("o", 5)); // Output: 8 (search for "o" starting from index 5)   

//lastIndexOf() → returns the index of the last occurrence of a specified value in a string, or -1 if it is not found
let str2 = "Hello, World! Hello!";
console.log(str2.lastIndexOf("Hello")); // Output: 14
console.log(str2.lastIndexOf("world")); // Output: -1 (not found, case-sensitive)
console.log(str2.lastIndexOf("o")); // Output: 8 (last occurrence of "o")
console.log(str2.lastIndexOf("o", 7)); // Output: 4 (search for "o" starting from index 7 and going backwards)

//3)charAt() → returns the character at a specified index in a string
let str3 = "Hello, World!";
console.log(str3.charAt(0)); // Output: "H"
console.log(str3.charAt(7)); // Output: "W"
console.log(str3.charAt(20)); // Output: "" (empty string, index out of range)

//4)repeat() → returns a new string with a specified number of copies of the original string
let str4 = "Hello";
console.log(str4.repeat(3)); // Output: "HelloHelloHello"   
console.log(str4.repeat(0)); // Output: "" (empty string, repeat 0 times)
console.log(str4.repeat(-1)); // Output: RangeError: Invalid count value (negative number)
console.log(str4.repeat(2.5)); // Output: "HelloHello" (fractional values are truncated)

//5)startsWith() → determines whether a string begins with the characters of a specified string, returning true or false as appropriate
let str5 = "Hello, World!";
console.log(str5.startsWith("Hello")); // Output: true
console.log(str5.startsWith("World")); // Output: false
console.log(str5.startsWith("Hello", 0)); // Output: true (search for "Hello" starting from index 0)
console.log(str5.startsWith("World", 7)); // Output: true (search for "World" starting from index 7)    

//6)endsWith() → determines whether a string ends with the characters of a specified string, returning true or false as appropriate
let str6 = "Hello, World!";
console.log(str6.endsWith("World!")); // Output: true
console.log(str6.endsWith("Hello")); // Output: false
console.log(str6.endsWith("World!", 12)); // Output: false (search for "World!" considering only the first 12 characters)
console.log(str6.endsWith("Hello", 5)); // Output: true (search for "Hello" considering only the first 5 characters)