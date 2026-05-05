// callback and Higher order Functions

function printValue(value){
    console.log(value)
}
// call the function
printValue(3);
printValue(true);
printValue("hello");

function greet (name) {
    console.log("Hello " + name);
}

function executeSomething(x){
    x("Nancy")
}
executeSomething(greet);