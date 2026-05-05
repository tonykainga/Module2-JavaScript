
let school = "code Academy";// Global variable
function outerFunction(){
    let teacher="Nancy";
    function innerFunction(){
        let student = "Alice";
        console.log(school);
        console.log(teacher);
        console.log(student)
    
    }
    innerFunction();
}
outerFunction();

    