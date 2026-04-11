function search(val){
    console.log('api call '+ val);
}
let debounce=debouncefunction(search,1000); 
function debouncefunction(search_output,delay){
    let timer;
    return function(...arg){
        clearTimeout(timer);
        timer=setTimeout(function(){
            search_output.apply(this,arg);
        },delay);
    }
}
debounce('n');
debounce('ne');
debounce('nee');
debounce('neet');
debounce('neeta');

//debounce function How it works
//Call 1 → timer starts
//Call again → previous timer cleared
//Only last call executes after delay
//debounce function is used to limit the number of times a function is called. It is used to improve the performance of a function by delaying the execution of the function until a certain amount of time has passed since the last time it was called. This is useful in situations where a function is called frequently, such as when a user is typing in a search box. The debounce function will delay the execution of the search function until the user has stopped typing for a certain amount of time, which will reduce the number of API calls made and improve the performance of the application.
//In the above code, the debounce function takes two arguments: the search function and the delay time in milliseconds. The debounce function returns a new function that will be called when the user types in the search box. The new function will clear the previous timer and set a new timer to call the search function after the specified delay time. If the user types again before the delay time has passed, the previous timer will be cleared and a new timer will be set, which will delay the execution of the search function until the user has stopped typing for the specified amount of time.
//In the above code, the search function is called with the value of the search box as an argument. The debounce function will delay the execution of the search function until the user has stopped typing for 1 second, which will reduce the number of API calls made and improve the performance of the application.
//Output:
//api call neeta


//HTML

// <input type="text" id="search" placeholder="Search..."> -->
const input = document.getElementById("search");

input.addEventListener(
  "input",
  debouncefunction((e) => {
    console.log("Searching:", e.target.value);
  }, 500)
);