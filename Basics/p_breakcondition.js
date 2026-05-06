//break:break stops the execution of a loop or switch statement and exits it immediately.

//solution 1: forloop
for(i=1;i<=10;i++){
    if (i === 3) {
        break;
    }
    console.log(i);
}


//solution 2: for  of
let array=[1,2,3,4,5];
for(let data of array){
    if(data === 3){
        break;
    }
    console.log(data);
}

//solution 3: while
let i = 1;
while (i <= 5) {
    if (i === 4) break;
    console.log(i);
    i++;
}

//solution 4: do while
let i = 1;
do {
    if (i === 3) break;
    console.log(i);
    i++;
} while (i <= 5);

//solution 5: switch
let day = 2;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}


//👉 forEach is a function, not a real loop
//👉 So break cannot stop it(forEach, map, filter, reduce)