//switch: Used to check multiple conditions (alternative to many if...else)

let day = 2;
switch(day){
    case 1 :{
        console.log("first day");
        break;
    }
    case 2 :{
        console.log("second day");
        break;
    }
    default :{
        console.log("there is no value");
    }
}

//Important: break
//👉 Stops execution after match

//Without break
//it will execute all the cases .


//grouping cases
let fruit = "apple";
switch (fruit) {
    case "apple":
    case "mango":
        console.log("Fruit is sweet");
        break;

    default:
        console.log("Unknown fruit");
}