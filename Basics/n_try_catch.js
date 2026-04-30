//try...catch is used to handle errors (exceptions) so your program doesn’t crash.

//syntax
try {
  // code that may throw error
} catch (error) {
  // handle error
}


//Basic Example
try {
  let x = y + 10; // y is not defined
} catch (err) {
  console.log("Error:", err.message);
}
//Output: "Error: y is not defined"


//Example with finally(both the cases finally will execute either error occurs or not).mostly used logfiles.
try {
  let a = 5;    
    let b = 0;
    let result = a / b; // This will throw an error (division by zero)
} catch (err) {
  console.log("Error:", err.message);
}   finally {
  console.log("This will always execute.");
}

//Throw Custom Error
function checkAge(age) {
  try {
    if (age < 18) {
      throw "You are underage";
    }
    console.log("Access granted");
  } catch (err) {
    console.log(err);
  }
}
checkAge(16);

// fetch API example with try...catch
async function getData() {
  try {
    let res = await fetch("https://api.example.com");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("API Error:", err);
  }
}
