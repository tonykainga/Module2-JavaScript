// conditionals help JS make decisions
// if runs code when a condition is true
//else runs code when the condition is false
//else if checks additional conditions
//conditionals rely on boolean expressions

//if statement 
// if (condition){code to run}
// else 
    // if(condition){code to run} else {code to run}

let age=15;

if(age>=18){
    console.log("you are an adult")
}
else{
    console.log("you are a minor")
}


let score=36

if (score>=80){
    console.log("Grade A")
}
else if(score>=60){
    console.log("Grade B")
}
else if(score>=50){
    console.log("Grade C")
}
else{
    console.log("Fail")
}