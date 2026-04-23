// scope the area in your code where a variable can be accessed

//  global scope a variable declared outside any block

let school= "banda"

function showSchool(){
    console.log(school);  
}
showSchool()
console.log(school)

// function scope variable declared within a fucntion

function greet(){
    let message ="Hello Student";
    message="welcome"
    console.log(message);
}
greet();

// block scope - only exists withing the block or calibarces

if (true){
    let color= "blue";
    console.log(color)
}
//  nested scope

let school = "code Academy";// Global variable
function outerFunction(){
    let teacher="Nancy";
    function innerFunction(){
        let student = "Alice";
        console.log(school);
        console.log(teacher);
        console.log(student)
    
    }
}