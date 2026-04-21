// // what is a function in JS
// // console.log("Welcome to class")
// // console.log("welcometo class")
// // console.log("welcome to class")
// //Syntax

// // function FunctionName(){
// //     block of code
// // }
// // Definfing a function 
//  function greet(){
//     console.log("Hello");
// }

// // CALLING A FUNCTION
// greet();
// greet();
// greet();

// function introduce(){
// console.log("hello");
// console.log("My name is Tony");
// console.log("I am learning Javascript")
// }
// introduce();

// // // adding parameters in a fucntion 

// function greet (name){
//     console.log("hello " + name)
// }
// greet("Tony");
// greet("Sarabi");

// function introduce(name,age){
//     console.log("My name is "+name);
//     console.log(`I am ${age} years old`)
// }
// introduce("Tony" ,27);
// introduce("Rose" ,23);

// function sum(a,b,c,d,e){
//     console.log(a+b+c+d+e);
// }
// sum(2,7,34,90,56);
// function showName(){
//     // console.log("Tony")
//     return "Tony"
// }
// let student=showName();
// console.log(student);

function sumOfTwoNumbers(x,y){
    return x+y;
}
sumOfTwoNumbers(100,89);
console.log(sumOfTwoNumbers(100,89));

let sum=sumOfTwoNumbers(100,89)//189
sum+=90;//sum=sum+90
console.log(sum);

// Nested Functions

function welcomestudent(){
    function sayhello(){
        console.log("Hello Student")
    };
    sayhello();
    console.log("We are learning Javascript Functions")
}
welcomestudent();

function outer(){
    function greet(name){
        return `hello my name is ${name}`;
    }
         return   greet("John")
}
console.log (outer());