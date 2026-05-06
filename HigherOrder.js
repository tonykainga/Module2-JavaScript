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

function operate(a,b,operation){
    return operation(a,b);
}
function add(x,y){
    return x+y;
}
console.log(operate(5,3,add));