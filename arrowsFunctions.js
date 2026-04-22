// =>
// let getName= function(){
//      return "Alice";
// }
let getName=() =>console.log("Alice");
getName();

let introduce=(name,country) =>{
    console.log("My name is "+ name);
    console.log("I come from " +country);
}
introduce("Nancy" , "Rwanda");

// let getName=() =>console.log("Alice");

let getName2=()=>{return "Cindy"};
console.log(getName2());