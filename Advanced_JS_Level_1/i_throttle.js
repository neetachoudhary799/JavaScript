//👉 Throttle ensures a function runs at most once in a given time interval
//Throttling limits the execution of a function to once every specified time interval.


function log(msg) {
    console.log(msg, new Date().toLocaleTimeString());
}

let throttled = throttle(log, 500);

function throttle(func, delay) {
    let lastCall = 0;

    return function(...args) {
        let now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            func.apply(this, args);
        }
    };
}

throttled("Click 1");
throttled("Click 2");
throttled("Click 3");