//1)indexOf()-------Important--
//2)lastIndexOf()
//3)charAt()
//4)repeat() -------Important--
//5)startWitth()
//6)endsWith()
//7)padStart() 
//8)padEnd()
//9)localeCompare()
//10)valueOf()


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

//7)padStart() → pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
let str8 = "5";
console.log(str8.padStart(3, "0"));// Output: "005" (pad with "0" until the total length is 3)
console.log(str8.padStart(5, "0")); // Output: "00005" (pad with "0" until the total length is 5)
console.log(str8.padStart(3)); // Output: "  5" (pad with spaces by default until the total length is 3)
console.log(str8.padStart(1, "0")); // Output: "5" (no padding needed, total length is already 1)   


//8)padEnd() → pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.
let str9 = "5";
console.log(str9.padEnd(3, "0"));   // Output: "500" (pad with "0" until the total length is 3)
console.log(str9.padEnd(5, "0")); // Output: "50000" (pad with "0" until the total length is 5)
console.log(str9.padEnd(3)); // Output: "5  " (pad with spaces by default until the total length is 3)
console.log(str9.padEnd(1, "0")); // Output: "5" (no padding needed, total length is already 1) 

//9)localeCompare() → returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order
let str10 = "apple";
console.log(str10.localeCompare("banana")); // Output: -1 (because "apple" comes before "banana")
console.log(str10.localeCompare("apple")); // Output: 0 (because "apple" is the same as "apple")
console.log(str10.localeCompare("ant")); // Output: 1 (because "apple" comes after "ant")

//10)valueOf() → returns the primitive value of a string object
let str11 = new String("Hello");
console.log(str11.valueOf()); // Output: "Hello" (the primitive string value is returned)